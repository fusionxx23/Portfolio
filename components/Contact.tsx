import React, { useState } from "react";
import { InView } from "react-intersection-observer";
import PurpleSpan from "./PurpleSpan";
import { TbBrandGithub, TbBrandNextjs } from "react-icons/tb";
import Link from "next/link";
export default function Contact() {
  const [display, setDisplay] = useState(false);
  return (
    <InView
      onChange={(inView, _entry) => {
        if (inView) {
          setDisplay(true);
        }
      }}
      id="Contact"
      className={`duration-700 pt-40 sm:pt-40 2xl:px-10 transition-up ease-out 
      ${display ? " translate-in " : "opacity-0 translate-y-1 translate-x-1 md:translate-y-4 md:-translate-x-4"}`}
    >
      <h1 className="content-header text-center">
        Contact Me
        <PurpleSpan text="." />
      </h1>
      <div className="flex justify-center">
        <p className="w-72 text-light-300 text-center font-chivo">
          Currently looking for new work, short term or long term. Contact me
          through email or discord, thanks!{" "}
        </p>
      </div>
      {/* Socials */}
      <div></div>

      <div className="mt-32 font-chivo flex flex-col items-center text-light-400 text-center mb-5 text-sm">
        <span className="inline-block">
          Checkout on github
          <span className="translate-x-2 transition-transform">
            <Link href={"https://github.com/fusionxx23/Portfolio"}>
              <TbBrandGithub
                color="#42bcf5"
                size={20}
                className="inline-block ml-2 hover:-translate-y-1 transition-transform"
              />
            </Link>
          </span>
        </span>
      </div>
    </InView>
  );
}
