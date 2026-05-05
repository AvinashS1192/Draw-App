"use client";
import axios from "axios";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { toast } from "sonner";

export default function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const toastId = toast.loading("creating account ...");

    try {
      const response = await axios.post("/api/auth/signup", formData);
      toast.success("logging you in ", { id: toastId });
      const loginres = await signIn("credentials", {
        email: formData.email,
        password: formData.password,
        redirect: false,
      });
      toast.success("success", { id: toastId });
      if (loginres?.ok) {
        router.push("/canvas");
      }
    } catch (error) {
      toast.error("Somethign went wrong , please try again later.", {
        id: toastId,
      });
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-dot-grid flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-(--bg-primary) border-4 border-black dark:border-white shadow-heavy p-8">
        <h1 className="text-4xl font-black tracking-tighter uppercase mb-2">
          Join us.
        </h1>
        <p className="font-bold text-gray-500 mb-8">
          Start your first collaborative board.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-black uppercase text-[10px] mb-1">
              Full Name
            </label>
            <input
              type="text"
              required
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full p-3 bg-transparent border-2 border-black dark:border-white focus:outline-none focus:ring-2 focus:ring-brand-accent font-bold"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label className="block font-black uppercase text-[10px] mb-1">
              Email
            </label>
            <input
              type="email"
              required
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full p-3 bg-transparent border-2 border-black dark:border-white focus:outline-none focus:ring-2 focus:ring-brand-accent font-bold"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block font-black uppercase text-[10px] mb-1">
              Password
            </label>
            <input
              type="password"
              required
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              className="w-full p-3 bg-transparent border-2 border-black dark:border-white focus:outline-none focus:ring-2 focus:ring-brand-accent font-bold"
              placeholder="••••••••"
            />
          </div>
          <button
            disabled={loading}
            className="w-full py-4 bg-brand-accent text-white font-black border-2 border-black shadow-heavy hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all cursor-pointer uppercase tracking-tighter"
          >
            {loading ? "Creating Account..." : "Create Account"}
          </button>
        </form>

        <p className="mt-8 text-center font-bold text-sm">
          Already have an account?{" "}
          <Link href="/signin" className="text-brand-accent underline">
            Sign In
          </Link>
        </p>
      </div>
    </main>
  );
}
