import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
} from "@mui/material";
import styles from "./GroupComponent.module.css";

const GroupComponent = () => {
  return (
    <>
      {/* <div className={styles.searchFieldBackground} /> */}
      <div className={styles.searchBar}>
        <div className={styles.searchInputArea}>
          <div className={styles.sampleLogo}>
            <img
              className={styles.sampleLogoChild}
              loading="lazy"
              alt=""
              src="/images/Group515.png"
            />
            <div className={styles.edCircle}>Ed-Circle.</div>
          </div>
          <div className={styles.inputField}>
            <div className={styles.inputFieldBase}>
              <div className={styles.inputWithLabel}>
                <div className={styles.label}>Email</div>
                {/* <div className={styles.input}>
                  <div className={styles.content}></div> 
                </div> */}
              </div>
            </div>
          </div>
        </div>
        <nav className={styles.programParent}>
          <div className={styles.program}>Program</div>
          <div className={styles.enterprise}>Enterprise</div>
          <div className={styles.universities}>Universities</div>
        </nav>
      </div>
      <div className={styles.signIn}>Sign in</div>
      <div className={styles.button1}>
        <div className={styles.buttonBase}>
          <div className={styles.text1}>Create free account</div>
        </div>
      </div>
    </>
  );
};
export default GroupComponent;
