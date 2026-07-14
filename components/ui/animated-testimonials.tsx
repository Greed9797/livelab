"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
};

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
  className,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
  className?: string;
}) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(() => {
        setActive((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay, testimonials.length]);

  const rotations = [-8, 6, -3, 9, -6, 4];
  const rotateFor = (index: number) => rotations[index % rotations.length];

  return (
    <div className={cn("mx-auto max-w-sm px-4 py-6 md:max-w-3xl md:px-6 md:py-6", className)}>
      <div className="relative grid grid-cols-1 gap-10 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:gap-12">
        <div>
          <div className="relative h-[26rem] w-full md:h-[30rem]">
            <AnimatePresence initial={false}>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.src}
                  initial={false}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : rotateFor(index),
                    zIndex: isActive(index)
                      ? 999
                      : testimonials.length + 2 - index,
                    y: isActive(index) ? [0, -60, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: rotateFor(index),
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 origin-bottom"
                >
                  <Image
                    src={testimonial.src}
                    alt={testimonial.name}
                    width={500}
                    height={500}
                    draggable={false}
                    className="h-full w-full rounded-3xl object-cover object-center shadow-[0_30px_80px_-40px_rgba(0,0,0,0.4)]"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        <div className="flex flex-col justify-between py-4">
          <motion.div
            key={active}
            initial={false}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <h3 className="text-2xl font-semibold text-foreground">
              {testimonials[active].name}
            </h3>
            <p className="text-sm text-[color:var(--muted)]">
              {testimonials[active].designation}
            </p>
            <motion.p className="mt-8 font-display text-2xl leading-snug tracking-[-0.01em] text-[color:var(--muted-strong)] md:text-3xl">
              {testimonials[active].quote.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={false}
                  animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: 0.02 * index,
                  }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
          </motion.div>
          <div className="flex gap-4 pt-12 md:pt-0">
            <button
              type="button"
              aria-label="Anterior"
              onClick={handlePrev}
              className="group/button flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--border)] bg-[color:var(--surface-alt)] transition-colors hover:border-brand"
            >
              <ArrowLeft className="h-5 w-5 text-foreground transition-transform duration-300 group-hover/button:-translate-x-0.5" />
            </button>
            <button
              type="button"
              aria-label="Próximo"
              onClick={handleNext}
              className="group/button flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--border)] bg-[color:var(--surface-alt)] transition-colors hover:border-brand"
            >
              <ArrowRight className="h-5 w-5 text-foreground transition-transform duration-300 group-hover/button:translate-x-0.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
