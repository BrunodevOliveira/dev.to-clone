import styles from "./styles.module.scss";

export const RightSidebar = () => {
  return (
    <aside className={styles.container}>
      <div className={styles.content}>
        <div className={styles.title}>
          <h3>Listing</h3>
          <p>See all</p>
        </div>
        <a href="#1" className={styles.hashtagPosts}>
          I develop for free just to practice my React/Redux skills
          <span className={styles.status}>forhire</span>
        </a>

        <a href="#2" className={styles.hashtagPosts}>
          Observability for GitHub CI workflows
          <span className={styles.status}>Events</span>
        </a>

        <a href="#3" className={styles.hashtagPosts}>
          Flatlogic Generator 50% Discount - flatlogic.com
          <span className={styles.status}>products</span>
        </a>

        <a href="#4" className={styles.hashtagPosts}>
          Collaborators Wanted For Noteslify - Privacy Friendly, Open Source.
          Alternative to EverNote
          <span className={styles.status}>collabs</span>
        </a>

        <a href="#5" className={styles.hashtagPosts}>
          Find an Entry Level Job in Tech: Switch to Become a Government Worker
          <span className={styles.status}>events</span>
        </a>
        <a href="#5" className={styles.listing}>
          Create a Listing
        </a>
      </div>
    </aside>
  );
};
