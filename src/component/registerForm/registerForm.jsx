"use client";
import { register } from "@/lib/action";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useFormState } from "react-dom";
import styles from "./registerForm.module.css";

function RegisterForm() {
  const [state, formAction] = useFormState(register, null);
  const route = useRouter();
  useEffect(() => {
    state?.success && route.push("/login");
  }, [state?.success, route]);

  return (
    <form className={styles.form} action={formAction}>
      <input type="text" placeholder="username" name="username" />
      <input type="email" placeholder="email" name="email" />
      <input type="password" placeholder="password" name="password" />
      <input
        type="password"
        placeholder="password again"
        name="passwordRepeat"
      />
      <button>Register</button>
      {state?.error}
      <Link href="/login">
        Have an Account <b>Login</b>
      </Link>
    </form>
  );
}

export default RegisterForm;
