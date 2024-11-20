import { ReactNode } from "react";
import { NavBar } from "./_components/NavBar";

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <NavBar />

      {children}
    </div>
  );
}
