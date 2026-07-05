"use client";

import Image from "next/image";
import { Atom, Braces, FileCode, Terminal, Figma, GitBranch, Coffee } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Badge = {
  icon: LucideIcon;
  bg: string; // badge background color
  fg: string; // icon color
};

// Ring 1 — closer orbit, faster
const ring1: Badge[] = [
  { icon: Atom, bg: "#61DAFB", fg: "#0B1F26" }, // React
  { icon: Braces, bg: "#F7DF1E", fg: "#111111" }, // JavaScript
  { icon: FileCode, bg: "#3178C6", fg: "#FFFFFF" }, // TypeScript
];

// Ring 2 — wider orbit, slower, opposite direction
const ring2: Badge[] = [
  { icon: Terminal, bg: "#3776AB", fg: "#FFFFFF" }, // Python
  { icon: Figma, bg: "#1E1E1E", fg: "#FFFFFF" }, // Figma
  { icon: GitBranch, bg: "#F1502F", fg: "#FFFFFF" }, // Git
  { icon: Coffee, bg: "#EA2D2E", fg: "#FFFFFF" }, // Java
];

function OrbitRing({
  badges,
  radius,
  duration,
  reverse,
  badgeSize = 40,
}: {
  badges: Badge[];
  radius: number;
  duration: number;
  reverse?: boolean;
  badgeSize?: number;
}) {
  const step = 360 / badges.length;

  return (
    <div
      className="absolute inset-0"
      style={{
        animation: `${reverse ? "spin-ccw" : "spin-cw"} ${duration}s linear infinite`,
      }}
    >
      {badges.map((badge, i) => {
        const angle = step * i;
        const Icon = badge.icon;
        return (
          <div
            key={i}
            className="absolute left-1/2 top-1/2"
            style={{
              transform: `rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg)`,
            }}
          >
            {/* Counter-rotate so the icon stays upright as the ring spins */}
            <div
              className="flex items-center justify-center rounded-full shadow-soft border border-line dark:border-line-dark"
              style={{
                width: badgeSize,
                height: badgeSize,
                marginLeft: -badgeSize / 2,
                marginTop: -badgeSize / 2,
                background: badge.bg,
                animation: `${reverse ? "spin-cw" : "spin-ccw"} ${duration}s linear infinite`,
              }}
            >
              <Icon size={badgeSize * 0.5} color={badge.fg} strokeWidth={2} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function HeroIllustration() {
  return (
    <div className="relative w-full aspect-square max-w-[420px] mx-auto flex items-center justify-center">
      {/* Soft pulsing glow behind the avatar */}
      <div
        className="absolute w-40 h-40 rounded-full bg-ink dark:bg-white blur-2xl"
        style={{ animation: "glow-pulse 3.5s ease-in-out infinite" }}
      />

      {/* Orbit rings, sized relative to the 420px box */}
      <OrbitRing badges={ring1} radius={95} duration={16} />
      <OrbitRing badges={ring2} radius={165} duration={26} reverse />

      {/* Center avatar */}
      <div className="relative z-10 w-32 h-32 rounded-full border-4 border-bg dark:border-bg-dark-secondary shadow-soft-hover overflow-hidden ring-1 ring-line dark:ring-line-dark">
        <Image
          src="/images/profile.jpg"
          alt="Janani B"
          fill
          sizes="128px"
          className="object-cover object-top"
        />
      </div>
    </div>
  );
}
