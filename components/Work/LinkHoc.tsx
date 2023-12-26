import Link from "next/link";
import React from "react";

export default function LinkHoc({
  link,
  children,
}: {
  link: string | undefined;
  children: React.ReactNode;
}) {
  if (!link) return <>{children}</>;
  else {
    return <Link href={link}>{children}</Link>;
  }
}
