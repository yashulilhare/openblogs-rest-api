import style from "./styles/SignUpForm.module.css";
import { useRegister } from "../hooks/useRegister";

export const SignUpForm = () => {
  const { handleSubmit, error } = useRegister();
  const messages = Array.isArray(error?.message)
    ? error.message.map((item) => (typeof item !== "string" ? item.msg : item))
    : error?.message
      ? [error.message]
      : [];

  return (
    <form autoComplete="on" className={style.form} onSubmit={handleSubmit}>
      {error && messages.length !== 0 && (
        <div className={style.authErrors}>
          <ul>
            {messages.map((item, i) => (
              <li key={i}>{`${item}`}</li>
            ))}
          </ul>
        </div>
      )}
      <div>
        <label htmlFor="username">Username</label>
        <input type="text" name="username" id="username" required />
      </div>
      <div>
        <label htmlFor="fullName">Full Name</label>
        <input
          type="text"
          name="fullName"
          id="fullName"
          required
          autoComplete="name"
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          required
          autoComplete="new-password"
        />
      </div>
      <div>
        <label htmlFor="confirmPass">Confirm Password:</label>
        <input
          type="password"
          required
          id="confirmPass"
          name="confirmPass"
          autoComplete="new-password"
        />
      </div>
      <button type="submit">Create Account</button>
    </form>
  );
};
