import React from "react";
import { MdMenu, MdClose } from "react-icons/md";
export default function NavAnimatedIcon({ open }: { open: boolean }) {
  return (
    <>
      <MdMenu
        className={`${open ? "opacity-0 hidden" : ""} transition-all`}
        size={30}
      />
      <MdClose
        size={30}
        className={`${
          open ? "rotate-0" : "opacity-0 rotate-90"
        }  transition-transform duration-200`}
      />
    </>
  );
}
