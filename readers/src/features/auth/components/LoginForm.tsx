import style from "./styles/LoginForm.module.css";

export const LogInForm = () => {
  return (
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
  );
};
