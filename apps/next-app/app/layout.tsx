import "./globals.css";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";

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
                "group bg-var(--bg-primary) text-var(--text-primary) border-4 border-black dark:border-white rounded-none p-4 flex items-center justify-center gap-3 font-black uppercase tracking-tighter",
              description: "text-sm font-bold ",
              actionButton:
                "bg-brand-accent text-white rounded-none border-2 border-black p-2",
              cancelButton:
                "bg-gray-200 text-black rounded-none border-2 border-black p-2",

              error: "text-red-600",
              success: "text-green-600",
              warning: "text-yellow-600",
            },
          }}
        />

        {children}
      </body>
    </html>
  );
}
