import Link from "next/link";
import React from "react";

export default function Landing({ display }: { display: boolean }) {
  const c = "neg-translate opacity-100";
  const dis = display ? c : "opacity-0";
  const anim = "transition-up";
  return (
    <main
      id="Landing"
      className={`flex font-poppins justify-center text-light-100 h-screen md:h-screen`}
      style={{ minHeight: "200px" }}
    >
      <div className={`w-full mt-30screen md:mt-72`}>
        <h2
          className={`mb-5 delay-500 text-md md:text-lg pl-1 ${dis} ${anim} select-none font-chivo`}
        >
          Hi, my name is
        </h2>
        <h1
          className={`text-4xl md:text-7xl delay-700 mb-3 font-bold ${dis} ${anim}`}
          style={{ color: "#ccd6f6" }}
        >
          Travis Tarpley
        </h1>
        <h3
          className={`text-3xl md:text-6xl delay-1000 ${dis} ${anim}`}
          style={{ color: "#8892b0" }}
        >
          I{`'`}m a Full-Stack Developer
        </h3>
        <h4
          className={`text-sm md:text-md md:w-104 mt-7  font-chivo text-light-400 delay-1000 ${dis} ${anim}`}
        >
          Specializing in building exceptional digital experiences. Currently, I
          {`'`}m focused on building applications for the decentralized web.{" "}
        </h4>
        <div className={`flex mt-14 delay-1000 font-chivo ${dis} ${anim}`}>
          <Link href={"#Work"}>
            <div className="px-6 py-3 border border-light-100 transition-all rounded-md cursor-pointer ease-out  hover:bg-light-100 hover:bg-opacity-30">
              <h1 className="text-md">Check out my work!</h1>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}
