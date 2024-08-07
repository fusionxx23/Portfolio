import Link from "next/link";
import React from "react";
import { useScrollAnimation } from "../../libs/hooks/scrollAnimation";

export default function LinkHoc({
  children,
  multiplier,
}: {
  link: string | undefined;
  multiplier: number;
  children: React.ReactNode;
}) {
  const { ref, scrolled } = useScrollAnimation({ multiplier });
  const anim = `${
    !scrolled ? "translate-x-20 opacity-0" : " opacity-100"
  } transition-all `;
  return (
    <div
      ref={ref}
      className={`${anim} duration-300 delay-50  hover:-translate-y-2 bg-dark-0 rounded-md`}
    >
      {children}
    </div>
  );
}
