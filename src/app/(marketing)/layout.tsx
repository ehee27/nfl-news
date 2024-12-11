import { ReactNode } from "react";
import { NavBar } from "./_components/NavBar";
import { Footer } from "./_components/Footer";

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <NavBar />
      {children}
      <Footer />
    </div>
  );
}
