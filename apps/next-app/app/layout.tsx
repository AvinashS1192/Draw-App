import "./globals.css";
import { Inter } from "next/font/google";
import ThemeToggle from "./component/themeToggle";
import Link from "next/link";
import { Toaster } from "sonner";
import { toast } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}  antialiased `}>
        <Toaster
          position="top-center"
          toastOptions={{
            unstyled: true,
            classNames: {
              toast:
                "group bg-var(--bg-primary) text-var(--text-primary) border-4 border-black dark:border-white rounded-none shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] p-4 flex items-center justify-center gap-3 font-black uppercase tracking-tighter",
              description: "text-sm font-bold opacity-70",
              actionButton:
                "bg-brand-accent text-white rounded-none border-2 border-black p-2",
              cancelButton:
                "bg-gray-200 text-black rounded-none border-2 border-black p-2",

              error: "text-red-600",
              success: "text-green-600",
              // loader: "mx-auto ",
            },
          }}
        />
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
            <Link href={"/signup"}>
              <button className="bg-brand-black text-white px-5 py-2 border-2 border-black shadow-heavy hover:shadow-none transition-all active:translate-x-1 active:translate-y-1">
                Sign Up
              </button>
            </Link>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
