"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion, AnimatePresence, MotionConfig, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type Testimonial = {
  name: string;
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
  const reduceMotion = useReducedMotion();

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
    if (autoplay && !reduceMotion) {
      const interval = setInterval(() => {
        setActive((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay, reduceMotion, testimonials.length]);

  const rotations = [-8, 6, -3, 9, -6, 4];
  const rotateFor = (index: number) => rotations[index % rotations.length];

  return (
    // reducedMotion="user" zera os saltos e giros dos cards para quem pediu menos movimento.
    <MotionConfig reducedMotion="user">
    <div className={cn("mx-auto max-w-md px-4 py-10 md:max-w-5xl md:px-6 md:py-12", className)}>
      <div className="relative grid grid-cols-1 items-center gap-10 md:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] md:gap-16">
        <div className="flex justify-center md:justify-start">
          <div className="relative aspect-[9/16] w-full max-w-[20rem] md:max-w-[24rem]">
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
                    alt={`Live da ${testimonial.name} com a LiveLab`}
                    width={588}
                    height={1280}
                    draggable={false}
                    className="h-full w-full rounded-3xl object-cover object-center shadow-[0_30px_70px_-35px_rgba(7,7,7,0.55)]"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        <div className="flex flex-col justify-center py-4">
          <motion.div
            key={active}
            initial={false}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <h3 className="display text-5xl leading-none md:text-7xl">
              {testimonials[active].name}
            </h3>
          </motion.div>
          <div className="flex gap-4 pt-8 md:pt-10">
            <button
              type="button"
              aria-label="Anterior"
              onClick={handlePrev}
              className="group/button flex h-12 w-12 items-center justify-center rounded-full border border-preto/25 transition-colors hover:border-preto hover:bg-preto hover:text-gelo"
            >
              <ArrowLeft className="h-5 w-5 transition-transform duration-300 group-hover/button:-translate-x-0.5" />
            </button>
            <button
              type="button"
              aria-label="Próximo"
              onClick={handleNext}
              className="group/button flex h-12 w-12 items-center justify-center rounded-full border border-preto/25 transition-colors hover:border-preto hover:bg-preto hover:text-gelo"
            >
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover/button:translate-x-0.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
    </MotionConfig>
  );
};
