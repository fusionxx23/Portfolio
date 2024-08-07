"use client";
import React, { useState } from "react";
import Context from "./Context";

interface Props {
  children: React.ReactNode;
}
export default function SidebarProvider({ children }: Props) {
  // const [contract, setContract] = useState<Subscribe | null>(null);
  const [sidebar, setSidebar] = useState(false);

  return (
    <Context.Provider
      value={{
        sidebar,
        setSidebar,
      }}
    >
      {" "}
      {children}
    </Context.Provider>
  );
}
