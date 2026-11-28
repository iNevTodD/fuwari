"use client";
import css from "./page.module.css";
import Input from "@/components/Input/Input";
import Button from "@/components/Button/Button";
import { useState } from "react";
import Link from "next/link";
import { createClient } from "@/utils/supabase/client";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const supabase = createClient();
    const { error } = await supabase.auth.signInWithPassword({
      password,
      email,
    });
    setLoading(false);
    if (error) {
      if (error.code === "invalid_credentials") {
        toast.error("Wrong email or password");
      } else {
        toast.error("Something went wrong. Please try again");
      }
      return;
    }

    toast.success("Welcome back!");
    router.push("/home");
  };
  return (
    <main className={css.page}>
      <div className={css.header}>
        <h1 className={css.title}>Welcome back</h1>
        <p className={css.text}>Log in to see your wallet and goals.</p>
      </div>

      <form onSubmit={handleSubmit} className={css.form}>
        <Input
          id="email"
          type="email"
          label="Email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          id="password"
          type="password"
          label="Password"
          placeholder="********"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />{" "}
        <Link href="#" className={`link ${css.forgot}`}>
          Forgot password?
        </Link>
        <Button type="submit" disabled={loading}>
          Log in
        </Button>
      </form>

      <div className={css.divider}>
        <span>or</span>
      </div>

      <Button type="button" variant="secondary">
        Continue with Google
      </Button>

      <p className={css.footer}>
        New here?{" "}
        <Link href="/signup" className="link">
          Create account
        </Link>
      </p>
    </main>
  );
}
