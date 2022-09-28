import styles from "./styles.module.scss";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { FaRegComment, FaRegBookmark, FaBookmark } from "react-icons/fa";
import { Fragment, useEffect, useState } from "react";
import { Loading } from "../Loading";

interface PostsInterface {
  id: number;
  img: string;
  name: string;
  date: string;
  title: string;
  tags: string[];
  reactions: number;
  comments: number;
  reading: number;
}

export const Post = () => {
  const [isLiked, setIsLiked] = useState(true);
  const [isSaved, setIsSaved] = useState(true);
  const [posts, setPosts] = useState<PostsInterface[]>();
  const [loading, setLoading] = useState(true);

  function handleIsLiked() {
    setIsLiked(() => !isLiked);
  }

  function handleIsSaved() {
    setIsSaved(() => !isSaved);
  }

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch("http://localhost:3333/posts");
        const dataPosts = await response.json();
        setPosts(dataPosts);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);

  const renderPostsCards = (post: PostsInterface) => {
    return (
      <div key={`post-${post.id}`} className={styles.container}>
        <img src={post.img} alt="avatar user" className={styles.imgProfile} />
        <article>
          <strong>{post.name}</strong>
          <time>{post.date}</time>

          <div>
            <p className={styles.title}>{post.title}</p>
            <div className={styles.tagBox}>
              {post.tags.map((tag) => (
                <a href="#h">{tag}</a>
              ))}
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
                <span>{post.reactions} Reactions</span>
              </div>
              <div className={styles.comment}>
                <FaRegComment size={18} />
                <span> {post.comments} Comments</span>
              </div>
            </div>

            <div className={styles.rightSide}>
              <small>{post.reading} min read</small>
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
  const spinner = (
    <div className={styles.load}>
      <Loading />
    </div>
  );

  const renderContent = (
    <>
      <div>{posts && posts.map(renderPostsCards)}</div>
    </>
  );

  return <>{loading ? spinner : renderContent}</>;
};
