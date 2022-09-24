import styles from "./styles.module.scss";
import { FiSearch } from "react-icons/fi";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <div className={styles.contentLeft}>
          <img
            src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
            alt="Logo Dev.to"
          />
          <div className={styles.searchBox}>
            <input type="text" placeholder="Search.." />
            <button type="submit" aria-label="Search">
              <FiSearch className={styles.searchIcon} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
