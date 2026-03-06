import styles from "./styles/CommentsContainer.module.css";
import type { PropsWithChildren } from "react";

export const CommentsContainer = ({ children }: PropsWithChildren) => {
  return <section className={styles.container}>{children}</section>;
};
