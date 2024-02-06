"use client";

import { login } from "@/lib/action";
import styles from "./loginForm.module.css";
import { useFormState } from "react-dom";
import Link from "next/link";

const LoginForm = () => {
  const [state, formAction] = useFormState(login, undefined);

  return (
    <form className={styles.form} action={formAction}>
      <input type="text" placeholder="username" name="username" />
      <input type="password" placeholder="password" name="password" />
      <button>Login</button>
      {state?.error}
      <Link href="/register">
        {"Don't have an account?"} <b>Register</b>
      </Link>
    </form>
  );
};

export default LoginForm;

// "use client";
// import { login } from "@/lib/action";
// import { useFormState, useFormStatus } from "react-dom";
// import styles from "./loginForm.module.css";

// export default function LoginForm() {
//   const [errorMessage, dispatch] = useFormState(login, undefined);

//   return (
//     <form action={dispatch} className={styles.form}>
//       <input type="username" name="username" placeholder="Username" required />
//       <input type="password" name="password" placeholder="Password" required />
//       <div>{errorMessage && <p>{errorMessage}</p>}</div>
//       <LoginButton />
//     </form>
//   );
// }

// function LoginButton() {
//   const { pending } = useFormStatus();

//   return (
//     <button aria-disabled={pending} type="submit">
//       Login
//     </button>
//   );
// }
