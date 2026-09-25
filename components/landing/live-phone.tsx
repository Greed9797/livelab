import Image from "next/image";

export type LiveShot = {
  name: string;
  src: string;
  detail?: string;
};

// Máscara de iPhone: as lives sobem dentro da tela, como o feed do TikTok.
// A trilha é absoluta para não alargar a seção; o corte fica no ancestral.
export function LivePhone({ lives }: { lives: LiveShot[] }) {
  const loop = [...lives, ...lives];

  return (
    <div className="mx-auto w-full min-w-0 max-w-[17.5rem] md:max-w-[19.5rem] lg:mx-0 lg:w-full lg:max-w-none">
      <div className="rounded-[2.75rem] bg-preto p-2.5 shadow-[0_30px_70px_-35px_rgba(7,7,7,0.55)]">
        <div className="live-feed-screen relative aspect-[9/19.5] rounded-[2.15rem] bg-preto [container-type:size]">
          <div className="live-feed-track absolute left-0 top-0 flex w-full flex-col">
            {loop.map((live, index) => {
              const clone = index >= lives.length;
              const alt = live.detail
                ? `${live.detail} da ${live.name} com a LiveLab`
                : `Live da ${live.name} com a LiveLab`;
              return (
                <figure
                  key={`${live.src}-${index}`}
                  className={
                    clone
                      ? "live-feed-clone live-feed-slide relative h-[100cqh] w-full shrink-0"
                      : "live-feed-slide relative h-[100cqh] w-full shrink-0"
                  }
                  aria-hidden={clone || undefined}
                >
                  <Image
                    src={live.src}
                    alt={clone ? "" : alt}
                    fill
                    sizes="(max-width: 768px) 280px, 312px"
                    className="object-cover"
                    draggable={false}
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-preto/90 via-preto/50 to-transparent px-4 pb-6 pt-16">
                    <p className="text-lg font-semibold leading-none text-gelo">{live.name}</p>
                    {live.detail ? (
                      <p className="mt-1.5 text-sm leading-snug text-gelo/80">{live.detail}</p>
                    ) : null}
                  </figcaption>
                </figure>
              );
            })}
          </div>
          <div
            className="pointer-events-none absolute left-1/2 top-2.5 z-10 h-[1.35rem] w-[5.25rem] -translate-x-1/2 rounded-full bg-preto"
            aria-hidden
          />
        </div>
      </div>
    </div>
  );
}
