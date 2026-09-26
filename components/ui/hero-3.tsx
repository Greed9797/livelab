"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "@/components/landing/button";
import { PlayGlyph } from "@/components/brand/livelab-symbol";

interface AnimatedMarqueeHeroProps {
  id?: string;
  title: React.ReactNode;
  description: string;
  primary: { text: string; href: string };
  secondary: { text: string; href: string };
  images: string[];
  className?: string;
}

// Faixa laranja da marca: os posts da LiveLab passando sobre o laranja cheio.
// Texto em preto porque o branco sobre #FE5105 não passa em contraste.
export const AnimatedMarqueeHero: React.FC<AnimatedMarqueeHeroProps> = ({
  id,
  title,
  description,
  primary,
  secondary,
  images,
  className,
}) => {
  const reduceMotion = useReducedMotion();
  // Loop duplicado. Sem movimento (CSS motion-reduce), as cópias somem e a faixa vira rolagem lateral.
  const shownImages = [...images, ...images];

  return (
    <section
      id={id}
      className={cn(
        "relative flex w-full flex-col items-center overflow-hidden bg-laranja px-6 pt-20 text-center text-preto [--focus:var(--preto)] md:pt-28",
        className
      )}
    >
      <h2 className="display max-w-4xl text-[clamp(2.75rem,7vw,6rem)]">{title}</h2>

      <p className="mt-6 max-w-xl text-lg leading-relaxed text-preto/80 md:text-xl">
        {description}
      </p>

      <div className="mt-9 flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center">
        <Button
          href={primary.href}
          target="_blank"
          rel="noopener noreferrer"
          variant="ink"
          size="lg"
        >
          {primary.text}
          <PlayGlyph className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5" />
        </Button>
        <Button
          href={secondary.href}
          {...(secondary.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          variant="outline-ink"
          size="lg"
        >
          {secondary.text}
          <PlayGlyph className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5" />
        </Button>
      </div>

      <div className="relative mt-16 h-60 w-[calc(100%+3rem)] overflow-hidden motion-reduce:snap-x motion-reduce:snap-mandatory motion-reduce:overflow-x-auto motion-reduce:px-6 md:mt-20 md:h-80">
        <motion.div
          className="flex w-max gap-5 pr-5 pt-4"
          animate={
            reduceMotion
              ? undefined
              : { x: ["-50%", "0%"], transition: { ease: "linear", duration: 40, repeat: Infinity } }
          }
        >
          {shownImages.map((src, index) => (
            <div
              key={index}
              className={cn(
                "relative aspect-[3/4] h-48 flex-shrink-0 snap-start md:h-64",
                index >= images.length && "motion-reduce:hidden"
              )}
              style={{ rotate: `${index % 2 === 0 ? -2 : 4}deg` }}
            >
              <Image
                src={src}
                alt={index < images.length ? `Post ${index + 1} da LiveLab no Instagram sobre live commerce` : ""}
                aria-hidden={index >= images.length || undefined}
                fill
                sizes="(max-width: 768px) 9rem, 12rem"
                className="rounded-2xl object-cover shadow-[0_18px_40px_-18px_rgba(7,7,7,0.55)]"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
