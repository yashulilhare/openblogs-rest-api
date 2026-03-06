import { Link } from "react-router-dom";
import waveImg from "@/assets/images/waving-hand.png";
import style from "./styles/LogIn.module.css";
import { LogInForm } from "@/features/auth/components/LoginForm";

export const LogIn = () => {
  return (
    <div className={style.container}>
      <div className={style.waveImg}>
        <img src={waveImg} aria-hidden="true" />
      </div>
      <h1 className={style.heading}> Welcome Back</h1>
      <p className={style.ctaText}>Sign in to write on our platform</p>
      <LogInForm />
      <p className={style.registerLink}>
        Don't have an account? <Link to="/register">Sign Up</Link>
      </p>
    </div>
  );
};
