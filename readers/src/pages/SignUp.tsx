import style from "./styles/SignUp.module.css";
import { Link } from "react-router-dom";
import shineImg from "@/assets/images/star.png";
import { SignUpForm } from "@/features/auth/components/SignUpForm";

export const SignUp = () => {
  return (
    <div className={style.container}>
      <div className={style.shineImgWrapper}>
        <img
          src={shineImg}
          alt="An shining star image for aesthetic."
          aria-hidden="true"
        />
      </div>
      <h1 className={style.heading}>Create Account</h1>
      <p className={style.ctaText}>
        Join the amazing community of writers on OpenBlogs.
      </p>
      <SignUpForm />
      <p className={style.loginLink}>
        Already have an account? <Link to="/login">Sign in</Link>
      </p>
    </div>
  );
};
