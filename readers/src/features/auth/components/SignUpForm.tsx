import style from "./styles/SignUpForm.module.css";

export const SignUpForm = () => {
  return (
    <form autoComplete="on" className={style.form}>
      <div>
        <label htmlFor="username">Username</label>
        <input type="text" name="username" id="username" required />
      </div>
      <div>
        <label htmlFor="fullName">Full Name</label>
        <input type="text" name="fullName" id="fullName" required />
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
          autoCapitalize="new-password"
        />
      </div>

      <button type="submit">Create Account</button>
    </form>
  );
};
