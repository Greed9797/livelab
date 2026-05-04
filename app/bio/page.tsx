import Image from "next/image";
import { ChevronDown } from "lucide-react";
import Logo from "@/components/bio/Logo";
import PlayBadge from "@/components/bio/PlayBadge";
import LinkButton from "@/components/bio/LinkButton";
import { links } from "@/lib/bio/links";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black md:h-screen md:min-h-0 md:overflow-hidden">
      {/* Background — mobile */}
      <div className="absolute inset-0 md:hidden">
        <Image
          src="/bio/bg-mobile.jpg"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      {/* Background — desktop */}
      <div className="absolute inset-0 hidden md:block">
        <Image
          src="/bio/bg-desktop.jpg"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Page content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center py-[32px] md:h-screen md:min-h-0 md:py-[24px]">
        {/* Play badge */}
        <PlayBadge className="h-[40px] w-[40px] md:h-[44px] md:w-[44px]" />

        {/* Logo */}
        <Logo className="mt-[12px] w-[260px] sm:w-[320px] md:mt-[10px] md:w-[330px] h-auto" />

        {/* Subtitle */}
        <p className="mt-[14px] text-[14px] sm:text-[15.2px] font-normal leading-none text-white/90 md:mt-[12px]">
          Alguns Links úteis
        </p>

        {/* Chevron */}
        <ChevronDown
          className="mt-[6px] h-[28px] w-[28px] animate-bounce text-[#FE5206]"
          strokeWidth={1.25}
        />

        {/* Buttons */}
        <div className="mt-[16px] flex flex-col gap-[14px] md:mt-[10px] md:gap-[10px]">
          {links.map((link) => (
            <LinkButton key={link.id} {...link} />
          ))}
        </div>

        {/* Heading */}
        <div className="mt-[28px] flex items-center gap-[6px] md:mt-[22px]">
          <h1 className="whitespace-nowrap text-[24px] sm:text-[27.75px] font-normal leading-none text-white md:text-[26px]">
            Luz, Câmera e <span className="font-serif italic">Vendas!</span>
          </h1>
          <span className="inline-block h-[5px] w-[5px] flex-shrink-0 rounded-full bg-[#FE5206]" />
        </div>

        {/* Footer */}
        <p className="mt-[20px] text-[8px] font-light text-[#8a8a8a] md:mt-[14px]">
          Todos os direitos reservados
        </p>
      </div>
    </main>
  );
}
