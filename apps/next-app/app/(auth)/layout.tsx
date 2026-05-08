import { ReactNode } from "react";
import { NavBar } from "../component/NavBar";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
}
