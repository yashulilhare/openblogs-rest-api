import styles from "./Main.module.css";
import type { PropsWithChildren } from "react";

export const Main = ({ children }: PropsWithChildren) => {
  return <main className={styles.main}>{children}</main>;
};
