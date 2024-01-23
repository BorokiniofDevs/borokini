import { handleGithubLogin, login } from "@/lib/action";
import styles from "./login.module.css";
import LoginForm from "@/component/loginForm/LoginForm";

const LoginPage = async () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form action={handleGithubLogin}>
          <button className={styles.github}>Login with Github</button>
        </form>
        <form className={styles.form} action={login}>
          <input type="text" placeholder="username" name="username" />
          <input type="password" placeholder="password" name="password" />
          <button>Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
