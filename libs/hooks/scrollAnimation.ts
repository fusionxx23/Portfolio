import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export const useScrollAnimation = ({ multiplier }: { multiplier: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    if (isInView) {
      console.log("set scrolled");
      setTimeout(() => {
        setScrolled(true);
      }, multiplier * 100);
    }
  }, [multiplier, isInView]);
  return { scrolled, ref };
};
