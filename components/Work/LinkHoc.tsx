import Link from "next/link";
import React from "react";
import { useScrollAnimation } from "../../libs/hooks/scrollAnimation";

export default function LinkHoc({
  link,
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
  } transition-all duration-500`;
  return (
    <div
      ref={ref}
      className={`${anim}  hover:-translate-y-2 bg-dark-0 rounded-md`}
    >
      {!link ? (
        <div>{children}</div>
      ) : (
        <Link className=" " href={link}>
          {children}
        </Link>
      )}
    </div>
  );
}
