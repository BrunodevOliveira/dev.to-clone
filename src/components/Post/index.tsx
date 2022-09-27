import styles from "./styles.module.scss";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { FaRegComment, FaRegBookmark, FaBookmark } from "react-icons/fa";
import { useState } from "react";

export const Post = () => {
  const [isLiked, setIsLiked] = useState(true);
  const [isSaved, setIsSaved] = useState(true);
  const [countLiked, setCountLiked] = useState(10);

  function handleIsLiked() {
    setIsLiked(() => !isLiked);

    if (isLiked) {
      return setCountLiked(() => countLiked - 1);
    }
    setCountLiked(() => countLiked + 1);
  }

  function handleIsSaved() {
    setIsSaved(() => !isSaved);
  }

  return (
    <div className={styles.container}>
      <img
        src="https://avatars.githubusercontent.com/u/85235164?v=4"
        alt="avatar user"
      />
      <article>
        <strong>Bruno Oliveira</strong>
        <time>Sep 24</time>

        <div>
          <p className={styles.title}>how to use the useState hook in react</p>
          <div className={styles.tagBox}>
            <a href="#h">#react</a>
            <a href="#h">#hooks</a>
            <a href="#h">#programming</a>
          </div>
        </div>

        <div className={styles.reactionsContainer}>
          <div className={styles.leftSide}>
            <div className={styles.reaction}>
              {isLiked ? (
                <FcLike size={18} onClick={handleIsLiked} />
              ) : (
                <FcLikePlaceholder size={18} onClick={handleIsLiked} />
              )}
              <span>{countLiked} Reactions</span>
            </div>
            <div className={styles.comment}>
              <FaRegComment size={18} />
              <span> 3 Comments</span>
            </div>
          </div>

          <div className={styles.rightSide}>
            <small>10 min read</small>
            {isSaved ? (
              <FaRegBookmark size={18} onClick={handleIsSaved} />
            ) : (
              <FaBookmark size={18} onClick={handleIsSaved} />
            )}
          </div>
        </div>
      </article>
    </div>
  );
};
