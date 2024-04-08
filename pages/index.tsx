import { Inter } from "@next/font/google";
import Navbar from "../components/Navbar";
import Loader from "../components/Loader/Loader";
import Landing from "../components/Landing";
import { useEffect, useRef, useState } from "react";
import About from "../components/About/About";
import SocialsLeft from "../components/SocialsLeft";
import Work from "../components/Work/Work";
import Contact from "../components/Contact";
import Sidebar from "../components/Sidebar";
import useSidebarProvider from "../libs/hooks/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  const { sidebar } = useSidebarProvider();
  const b = (window: any) => window?.document?.querySelector("body")?.classList;
  const removeHidden = (window: any) => {
    b(window)?.remove("overflow-y-hidden");
  };
  const removeScroll = (window: any) => {
    b(window)?.remove("overflow-y-scroll");
  };
  const addScroll = (window: any) => {
    b(window)?.add("overflow-y-scroll");
  };
  const addHidden = (window: any) => {
    b(window)?.add("overflow-y-hidden");
  };

  useEffect(() => {
    if (!loaded) {
      setTimeout(() => {
        setLoaded(true);
      }, 3200);
    } else {
      removeHidden(window);
      addScroll(window);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loaded]);
  useEffect(() => {
    if (!loaded) return;
    if (sidebar) {
      removeScroll(window);
      addHidden(window);
    } else {
      removeHidden(window);
      addScroll(window);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sidebar]);
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.scrollY;
    const maxScroll =
      document.documentElement.offsetHeight - window.innerHeight;
    const percent = position / maxScroll;
    setScrollPosition(percent);
  };

  console.log("HELLO?");
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="fixed top-0 left-0 w-1 h-screen z-50">
        <div
          className={`bg-purple-300 w-1 `}
          style={{ height: `${100 * scrollPosition}vh` }}
        ></div>
      </div>
      <Sidebar />
      <SocialsLeft display={loaded} />
      <Loader display={loaded} />
      <div className="bg-dark-300 w-full scroll-smooth">
        <Navbar display={loaded}></Navbar>
        <div
          className="w-full px-7 sm:px-20 md:px-20 lg:px-40 xl:px-72 2xl:px-100 min-h-fit overflow-x-hidden "
          id="mainPage"
        >
          <Landing display={loaded} />
          <About></About>
          <Work />
          <Contact />
        </div>
      </div>
    </div>
  );
}
