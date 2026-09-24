import Logo from "@/components/bio/Logo";
import BioVideo from "@/components/bio/BioVideo";
import LinkButton from "@/components/bio/LinkButton";
import { links } from "@/lib/bio/links";

export default function BioPage() {
  return (
    <main className="bio-page">
      <BioVideo />
      <div className="bio-col">
        <Logo className="bio-logo" />
        <div className="bio-spacer" />
        <h1 className="bio-title">
          <span className="bio-title-sans">Luz,</span>
          <span className="bio-title-sans">Câmera</span>
          <span className="bio-title-serif">
            Vendas<span className="bio-title-mark">!</span>
          </span>
        </h1>
        <nav className="bio-doors" aria-label="Escolha seu caminho">
          {links.map((link) => (
            <LinkButton key={link.id} {...link} />
          ))}
        </nav>
        <p className="bio-foot">
          <span className="bio-foot-dot" aria-hidden="true" />
          Grupo LiveLab
        </p>
      </div>
      <svg aria-hidden="true" className="bio-grain bio-grain-mobile">
        <filter id="bio-grain-mobile">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#bio-grain-mobile)" />
      </svg>
      <svg aria-hidden="true" className="bio-grain bio-grain-desktop">
        <filter id="bio-grain-desktop">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#bio-grain-desktop)" />
      </svg>
    </main>
  );
}
