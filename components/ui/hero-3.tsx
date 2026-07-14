"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils"; // Assuming you have a `cn` utility from shadcn
import {
  WHATSAPP_FRANCHISE_URL,
  WHATSAPP_SALES_URL,
} from "@/lib/contact";

// Props interface for the component
interface AnimatedMarqueeHeroProps {
  tagline: string;
  title: React.ReactNode;
  description: string;
  ctaText: string;
  images: string[];
  className?: string;
}

// The main hero component
export const AnimatedMarqueeHero: React.FC<AnimatedMarqueeHeroProps> = ({
  tagline,
  title,
  description,
  ctaText,
  images,
  className,
}) => {
  // Animation variants for the text content
  const FADE_IN_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 100, damping: 20 } },
  };

  // Duplicate images for a seamless loop
  const duplicatedImages = [...images, ...images];

  return (
    <section
      className={cn(
        "relative w-full overflow-hidden bg-background flex flex-col items-center text-center px-4 pt-20 pb-0 md:pt-24",
        className
      )}
    >
      <div className="z-10 flex flex-col items-center">
        {/* Tagline */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={FADE_IN_ANIMATION_VARIANTS}
          className="mb-4 inline-block rounded-full border border-border bg-card/50 px-4 py-1.5 text-sm font-medium text-muted-foreground backdrop-blur-sm"
        >
          {tagline}
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="text-5xl md:text-7xl font-bold tracking-tighter text-foreground"
        >
          {typeof title === 'string' ? (
            title.split(" ").map((word, i) => (
              <motion.span
                key={i}
                variants={FADE_IN_ANIMATION_VARIANTS}
                className="inline-block"
              >
                {word}&nbsp;
              </motion.span>
            ))
          ) : (
            title
          )}
        </motion.h1>

        {/* Description */}
        <motion.p
          initial="hidden"
          animate="show"
          variants={FADE_IN_ANIMATION_VARIANTS}
          transition={{ delay: 0.5 }}
          className="mt-6 max-w-xl text-lg text-muted-foreground"
        >
          {description}
        </motion.p>

        {/* Call to Action Buttons */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={FADE_IN_ANIMATION_VARIANTS}
          transition={{ delay: 0.6 }}
          className="mt-8 flex flex-col items-center gap-3 sm:flex-row"
        >
          <motion.a
            href={WHATSAPP_FRANCHISE_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-full bg-brand px-8 py-3 font-semibold text-brand-foreground shadow-lg transition-colors hover:bg-brand-hover"
          >
            {ctaText}
          </motion.a>
          <motion.a
            href={WHATSAPP_SALES_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-full border border-[color:var(--border-strong)] bg-background px-8 py-3 font-semibold text-foreground shadow-sm transition-colors hover:bg-foreground hover:text-background"
          >
            Quero vender
          </motion.a>
        </motion.div>
      </div>

      {/* Animated Image Marquee */}
      <div className="relative mt-14 h-56 w-full overflow-hidden md:mt-20 md:h-72 [mask-image:linear-gradient(to_bottom,black_75%,transparent)]">
        <motion.div
          className="flex gap-4"
          animate={{
            x: ["-100%", "0%"],
            transition: {
              ease: "linear",
              duration: 40,
              repeat: Infinity,
            },
          }}
        >
          {duplicatedImages.map((src, index) => (
            <div
              key={index}
              className="relative aspect-[3/4] h-48 md:h-64 flex-shrink-0"
              style={{
                rotate: `${(index % 2 === 0 ? -2 : 5)}deg`,
              }}
            >
              <Image
                src={src}
                alt={`Showcase image ${index + 1}`}
                fill
                sizes="(max-width: 768px) 12rem, 16rem"
                className="rounded-2xl object-cover shadow-md"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
