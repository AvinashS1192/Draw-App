import ThemeToggle from "./themeToggle";
import Link from "next/link";

export function NavBar() {
  return (
    <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-8 py-4 border-b-2 border-black bg-(--bg-primary)/80 backdrop-blur-md">
      <Link href={"/"}>
        <div className="text-2xl font-black tracking-tighter">Draw.</div>
      </Link>

      <div className="flex gap-6 font-bold uppercase text-sm items-center">
        <a href="#" className="hover:underline">
          Pricing
        </a>
        <ThemeToggle></ThemeToggle>
        <a href="#" className="hover:underline">
          Docs
        </a>
        <Link href={"/signin"}>
          <button className="bg-brand-black text-white px-5 py-2 border-2 border-black shadow-heavy hover:shadow-none transition-all active:translate-x-1 active:translate-y-1">
            Sing In
          </button>
        </Link>
      </div>
    </nav>
  );
}
