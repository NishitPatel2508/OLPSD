import { useNavigate } from "react-router-dom";
import styles from "./Section.module.css";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";

const Section = () => {
  const navigate = useNavigate();
  // const handleTwiiter = () => {
  //   navigate(");
  // };
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.footerText}>
            © 2024 Brainwave. All rights reserved.
          </div>
          {/* <div className={styles.socialIcons}>
            <img
              className={styles.socialIcon}
              alt=""
              src="/images/twitter.png"
              // onClick={handleTwiiter}
            />
            <img
              className={styles.socialIcon1}
              alt=""
              src="/images/linkedin.png"
            />
            <img className={styles.socialIcon2} alt="" src="/images/fb.png" />
            <img className={styles.socialIcon3} alt="" src="/images/git.png" />
          </div> */}
          <div className={styles.socialIcons}>
            <a
              className={styles.socialIcon}
              href="https://twitter.com/home"
              target="_blank"
            >
              <XIcon />
            </a>
            <a
              className={styles.socialIcon}
              href="https://www.linkedin.com/in/nishit-patel-6650b1188/"
              target="_blank"
            >
              <LinkedInIcon />
            </a>
            <a
              className={styles.socialIcon}
              href="https://www.facebook.com/profile.php?id=100009329100515"
              target="_blank"
            >
              <FacebookIcon />
            </a>
            <a
              className={styles.socialIcon}
              href="https://github.com/NishitPatel2508/"
              target="_blank"
            >
              <GitHubIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
