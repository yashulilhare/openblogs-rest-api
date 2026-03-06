import style from "./styles/CommentCard.module.css";

export const CommentCard = () => {
  return (
    <div className={style.card}>
      <h3 className={style.user}>Yashu Lilhare</h3>
      <p className={style.datetime}>Apr 28, 2025, 4:28 PM</p>
      <p className={style.message}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis qui
        iusto distinctio natus
      </p>
    </div>
  );
};
