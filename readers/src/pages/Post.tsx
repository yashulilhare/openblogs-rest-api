import style from "./styles/Post.module.css";

import { PostContentSection } from "@/features/posts/components/PostContentSection";
import { CommentBox } from "@/features/comments/components/CommentBox";
import { CommentsContainer } from "@/features/comments/components/CommentsContainer";
import { CommentCard } from "@/features/comments/components/CommentCard";

export const Post = () => {
  return (
    <div className={style.main}>
      <div className={style.mainContainer}>
        <PostContentSection />
        <CommentBox />
        <CommentsContainer>
          <CommentCard />
          <CommentCard />
        </CommentsContainer>
      </div>
    </div>
  );
};
