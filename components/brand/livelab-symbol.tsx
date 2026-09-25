type LivelabSymbolProps = {
  className?: string;
  title?: string;
};

// Símbolo oficial: o círculo do REC com o play vazado (Figma, slide 7).
// O play é o mesmo desenho do pingo do "i" no wordmark, em escala 4x.
// O recorte usa evenodd, então o fundo aparece através do play.
export const SYMBOL_PATH =
  "M50 0A50 50 0 1 1 50 100A50 50 0 1 1 50 0Z" +
  "M75.78 41.32L42.34 21.66C35.64 17.72 27.21 22.55 27.21 30.3V69.58" +
  "C27.21 77.34 35.64 82.16 42.34 78.23L75.78 58.6C82.39 54.73 82.39 45.2 75.78 41.32Z";

export function LivelabSymbol({ className, title }: LivelabSymbolProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="currentColor"
      {...(title
        ? { role: "img", "aria-label": title }
        : { "aria-hidden": true })}
    >
      <path fillRule="evenodd" d={SYMBOL_PATH} />
    </svg>
  );
}

// Play isolado, para ícone de CTA.
export function PlayGlyph({ className }: { className?: string }) {
  return (
    <svg
      viewBox="42 7 14.5 15.6"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="currentColor"
      aria-hidden
    >
      <path d="M54.3707 12.4288L46.0109 7.51454C44.3349 6.53088 42.2268 7.73627 42.2268 9.67537V19.4959C42.2268 21.435 44.3349 22.6404 46.0109 21.6567L54.3707 16.7505C56.0224 15.7829 56.0224 13.4004 54.3707 12.4288Z" />
    </svg>
  );
}
