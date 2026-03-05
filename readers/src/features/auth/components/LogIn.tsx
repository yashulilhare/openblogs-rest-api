import { Link } from "react-router-dom";
import waveImg from "@/assets/images/waving-hand.png";
import style from "./styles/LogIn.module.css";

export const LogIn = () => {
  return (
    <div className={style.container}>
      <div className={style.waveImg}>
        <img src={waveImg} aria-hidden="true" />
      </div>
      <h1 className={style.heading}> Welcome Back</h1>
      <p className={style.ctaText}>Sign in to write on our platform</p>
      <form autoComplete="on" className={style.form}>
        <div>
          <label htmlFor="username">Username</label>
          <input type="type" name="username" id="username" required />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            required
            pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)\S{8,}$"
            title="Password must contain atleast 1 uppercase, 1 lowercase, 1 symbol, 1 number and no whitespace"
          />
        </div>
        <button type="submit">Sign In</button>
      </form>
      <p className={style.registerLink}>
        Don't have an account? <Link to="/register">Sign Up</Link>
      </p>
    </div>
  );
};
