"use client";

import css from "./page.module.css";
import Input from "@/components/Input/Input";
import Button from "@/components/Button/Button";
import { useState } from "react";
import Link from "next/link";
import { createClient } from "@/utils/supabase/client";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function SignUp() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password.length < 8) {
      setPasswordError("The password must be at least 8 characters long");
      return;
    }
    setPasswordError("");
    setLoading(true);
    const supabase = createClient();
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { name } },
    });
    setLoading(false);
    if (error) {
      toast.error(`Something went wrong: ${error.message}`);
      return;
    }

    toast.success("Account created!");
    router.push("/onboarding/work");
  };

  return (
    <main className={css.page}>
      <div className={css.header}>
        <h1 className={css.title}>Create your account</h1>
        <p className={css.text}>
          Your goals and shifts are saved to your account. Only you can see
          them.
        </p>
      </div>

      <form onSubmit={handleSubmit} className={css.form}>
        <Input
          id="name"
          label="Your name"
          placeholder="Heidi Montag"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
          error={passwordError}
        />{" "}
        <Button type="submit" disabled={loading}>
          Create account
        </Button>
      </form>

      <div className={css.divider}>
        <span>or</span>
      </div>

      <Button type="button" variant="secondary">
        Continue with Google
      </Button>

      <p className={css.footer}>
        Already have an account?{" "}
        <Link href="/login" className="link">
          Log in
        </Link>
      </p>
    </main>
  );
}
