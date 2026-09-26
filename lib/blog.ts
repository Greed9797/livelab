import { readdir, readFile } from "node:fs/promises";
import { join } from "node:path";

// Posts são arquivos content/blog/<slug>.md com front matter (title, description, date, author).
// Publicar = commitar um arquivo. Sem CMS, sem dependência nova.

const BLOG_DIR = join(process.cwd(), "content/blog");

export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO (YYYY-MM-DD)
  author: string;
  html: string;
  readingMinutes: number;
};

function parseFrontMatter(raw: string) {
  const m = raw.match(/^---\n([\s\S]*?)\n---\n?/);
  if (!m) return { meta: {} as Record<string, string>, body: raw };
  const meta: Record<string, string> = {};
  for (const line of m[1].split("\n")) {
    const i = line.indexOf(":");
    if (i > 0) meta[line.slice(0, i).trim()] = line.slice(i + 1).trim().replace(/^"|"$/g, "");
  }
  return { meta, body: raw.slice(m[0].length) };
}

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

// Só negrito, itálico e link. Texto vem escapado antes.
function inline(s: string) {
  return esc(s)
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/(^|[^*])\*([^*]+)\*/g, "$1<em>$2</em>")
    .replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+|\/[^\s)]*)\)/g, (_, t, u) =>
      u.startsWith("http")
        ? `<a href="${u}" target="_blank" rel="noopener noreferrer">${t}</a>`
        : `<a href="${u}">${t}</a>`
    );
}

// ponytail: markdown mínimo (títulos, parágrafos, listas, citação). Tabelas e código
// entram quando um post precisar; trocar por remark se o blog crescer.
export function markdownToHtml(md: string) {
  const out: string[] = [];
  const lines = md.split("\n");
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    if (!line.trim()) { i++; continue; }
    const h = line.match(/^(#{2,3})\s+(.*)/);
    if (h) {
      const level = h[1].length;
      const id = h[2].toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
      out.push(`<h${level} id="${id}">${inline(h[2])}</h${level}>`);
      i++; continue;
    }
    if (/^[-*]\s/.test(line) || /^\d+\.\s/.test(line)) {
      const ordered = /^\d+\.\s/.test(line);
      const items: string[] = [];
      while (i < lines.length && (/^[-*]\s/.test(lines[i]) || /^\d+\.\s/.test(lines[i]))) {
        items.push(`<li>${inline(lines[i].replace(/^([-*]|\d+\.)\s/, ""))}</li>`); i++;
      }
      out.push(`<${ordered ? "ol" : "ul"}>${items.join("")}</${ordered ? "ol" : "ul"}>`);
      continue;
    }
    if (line.startsWith("> ")) {
      const q: string[] = [];
      while (i < lines.length && lines[i].startsWith("> ")) { q.push(lines[i].slice(2)); i++; }
      out.push(`<blockquote><p>${inline(q.join(" "))}</p></blockquote>`);
      continue;
    }
    const p: string[] = [];
    while (i < lines.length && lines[i].trim() && !/^(#{2,3}\s|[-*]\s|\d+\.\s|> )/.test(lines[i])) { p.push(lines[i]); i++; }
    out.push(`<p>${inline(p.join(" "))}</p>`);
  }
  return out.join("\n");
}

export async function getPost(slug: string): Promise<Post | null> {
  if (!/^[a-z0-9-]+$/.test(slug)) return null;
  let raw: string;
  try {
    raw = await readFile(join(BLOG_DIR, `${slug}.md`), "utf8");
  } catch {
    return null;
  }
  const { meta, body } = parseFrontMatter(raw);
  const words = body.split(/\s+/).filter(Boolean).length;
  return {
    slug,
    title: meta.title ?? slug,
    description: meta.description ?? "",
    date: meta.date ?? "",
    author: meta.author ?? "LiveLab",
    html: markdownToHtml(body),
    readingMinutes: Math.max(1, Math.round(words / 200)),
  };
}

export async function getAllPosts(): Promise<Post[]> {
  let files: string[];
  try {
    files = await readdir(BLOG_DIR);
  } catch {
    return [];
  }
  const posts = await Promise.all(
    files.filter((f) => f.endsWith(".md")).map((f) => getPost(f.replace(/\.md$/, "")))
  );
  return posts.filter((p): p is Post => p !== null).sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function formatDate(iso: string) {
  const d = new Date(`${iso}T12:00:00-03:00`);
  return d.toLocaleDateString("pt-BR", { day: "numeric", month: "long", year: "numeric" });
}
