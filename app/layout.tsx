import { ReactNode } from "react";
import SidebarProvider from "../libs/hooks/Sidebar/SidebarProvider";
import "../styles/globals.css";
export default function layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div>
          <SidebarProvider>{children}</SidebarProvider>
        </div>
      </body>
    </html>
  );
}
