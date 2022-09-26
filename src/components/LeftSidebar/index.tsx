import styles from "./styles.module.scss";
import { AiFillInstagram } from "react-icons/ai";
import { FiTwitch } from "react-icons/fi";
import {
  FcAbout,
  FcApproval,
  FcAssistant,
  FcClapperboard,
  FcCommandLine,
  FcDocument,
  FcHeadset,
  FcHome,
  FcIdea,
  FcInspection,
  FcKindle,
  FcLike,
  FcLock,
  FcOpenedFolder,
  FcShop,
} from "react-icons/fc";
import { FaFacebookSquare, FaGithub, FaTwitter } from "react-icons/fa";

export const LeftSidebar = () => {
  return (
    <div className={styles.container}>
      <nav>
        <ul>
          <li>
            <a href="#Home" className={styles.iconConteiner}>
              <FcHome size={24} />
              <span>Home</span>
            </a>
          </li>
          <li>
            <a href="#Listings" className={styles.iconConteiner}>
              <FcDocument size={24} />
              <span>Listings</span>
            </a>
          </li>
          <li>
            <a href="#Listings" className={styles.iconConteiner}>
              <FcHeadset size={24} />
              <span>Listings</span>
            </a>
          </li>
          <li>
            <a href="#Videos" className={styles.iconConteiner}>
              <FcClapperboard size={24} />
              <span>Videos</span>
            </a>
          </li>
          <li>
            <a href="#Tags" className={styles.iconConteiner}>
              <FcInspection size={24} />
              <span>Tags</span>
            </a>
          </li>
          <li>
            <a href="#FAQ" className={styles.iconConteiner}>
              <FcIdea size={24} />
              <span>FAQ</span>
            </a>
          </li>
          <li>
            <a href="#Forem" className={styles.iconConteiner}>
              <FcShop size={24} />
              <span>Forem Shop</span>
            </a>
          </li>
          <li>
            <a href="#Sponsors" className={styles.iconConteiner}>
              <FcLike size={24} />
              <span>Sponsors</span>
            </a>
          </li>
          <li>
            <a href="#About" className={styles.iconConteiner}>
              <FcAbout size={24} />
              <span>About</span>
            </a>
          </li>
          <li>
            <a href="#Contact" className={styles.iconConteiner}>
              <FcAssistant size={24} />
              <span>Contact</span>
            </a>
          </li>
          <li>
            <a href="#Guides" className={styles.iconConteiner}>
              <FcDocument size={24} />
              <span>Guides</span>
            </a>
          </li>
          <li>
            <a href="#Comparisons" className={styles.iconConteiner}>
              <FcCommandLine size={24} />
              <span>Software Comparisons</span>
            </a>
          </li>
        </ul>
      </nav>

      <nav>
        <ul className={styles.box}>
          <p>Other</p>
          <li>
            <a href="#Code" className={styles.iconConteiner}>
              <FcApproval size={24} />
              <span>Code of Conduct</span>
            </a>
          </li>

          <li>
            <a href="#Policy" className={styles.iconConteiner}>
              <FcLock size={24} />
              <span>Privacy Policy</span>
            </a>
          </li>

          <li>
            <a href="#Terms" className={styles.iconConteiner}>
              <FcKindle size={24} />
              <span>Terms of use</span>
            </a>
          </li>
        </ul>
      </nav>

      <nav>
        <ul className={styles.socialsIcons}>
          <li>
            <a href="#Twitter">
              <FaTwitter />
            </a>
          </li>
          <li>
            <a href="#Facebook">
              <FaFacebookSquare />
            </a>
          </li>
          <li>
            <a href="#GitHub">
              <FaGithub />
            </a>
          </li>
          <li>
            <a href="#Instagram">
              <AiFillInstagram />
            </a>
          </li>
          <li>
            <a href="#Twitch">
              <FiTwitch />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
