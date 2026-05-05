"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (res?.error) {
      alert("Invalid credentials!"); // Replace with a toast later
      setLoading(false);
    } else {
      router.push("/dashboard");
      router.refresh();
    }
  };

  return (
    <main className="min-h-screen bg-dot-grid flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-[var(--bg-primary)] border-4 border-black dark:border-white shadow-heavy p-8 transition-all">
        <h1 className="text-4xl font-black tracking-tighter uppercase mb-2">
          Login
        </h1>
        <p className="font-bold text-gray-500 mb-8">
          Access your shared boards.
        </p>

        {/* Credentials Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-black uppercase text-xs mb-1">
              Email
            </label>
            <input
              type="email"
              required
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 bg-transparent border-2 border-black dark:border-white focus:outline-none focus:ring-2 focus:ring-brand-accent font-bold"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block font-black uppercase text-xs mb-1">
              Password
            </label>
            <input
              type="password"
              required
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 bg-transparent border-2 border-black dark:border-white focus:outline-none focus:ring-2 focus:ring-brand-accent font-bold"
              placeholder="••••••••"
            />
          </div>
          <button
            disabled={loading}
            className="w-full py-4 bg-brand-black dark:bg-white dark:text-black text-white font-black border-2 border-black dark:border-white shadow-heavy hover:shadow-none transition-all cursor-pointer uppercase"
          >
            {loading ? "Verifying..." : "Sign In"}
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-8">
          <div className="flex-grow border-t-2 border-black/10 dark:border-white/10"></div>
          <span className="px-4 font-black text-[10px] uppercase text-gray-400">
            Or use social
          </span>
          <div className="flex-grow border-t-2 border-black/10 dark:border-white/10"></div>
        </div>

        {/* Social Buttons */}
        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
            className="flex items-center justify-center py-3 border-2 border-black dark:border-white font-bold shadow-heavy hover:shadow-none transition-all cursor-pointer bg-white dark:bg-transparent text-black dark:text-white"
          >
            Google
          </button>
          <button
            onClick={() => signIn("github", { callbackUrl: "/dashboard" })}
            className="flex items-center justify-center py-3 border-2 border-black dark:border-white font-bold shadow-heavy hover:shadow-none transition-all cursor-pointer bg-white dark:bg-transparent text-black dark:text-white"
          >
            GitHub
          </button>
        </div>

        <p className="mt-8 text-center font-bold text-sm">
          New here?{" "}
          <Link href="/signup" className="text-brand-accent underline">
            Create an account
          </Link>
        </p>
      </div>
    </main>
  );
}
