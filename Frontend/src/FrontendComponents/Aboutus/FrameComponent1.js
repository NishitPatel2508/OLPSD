import { Button } from "@mui/material";
import styles from "./FrameComponent1.module.css";
import img from "./arrow.png";
import EmailIcon from "@mui/icons-material/Email";

const FrameComponent1 = () => {
  return (
    <section className={styles.aboutUsInner}>
      <div className={styles.frameParent}>
        <div className={styles.imageBgParent}>
          <div className={styles.imageBg} />
          <img
            className={styles.sectionImgIcon}
            loading="lazy"
            alt=""
            src="/images/aboutus3.png"
          />
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.featuresParent}>
            <h3 className={styles.features}>Features</h3>
            <h1 className={styles.weAreAlways}>
              We are always working to provide you best of the features in all
              aspects.
            </h1>
            <div className={styles.atWeekenduxThe}>
              Our primary goal is to empower organizations with a powerful tool
              that not only enhances productivity but also prioritizes employee
              well-being.By providing actionable insights and personalized
              recommendations, our dashboard aims to facilitate a healthier and
              more engaged workforce, ultimately driving organizational success.
            </div>
          </div>
          <div className={styles.youWillFindContainer}>
            <p className={styles.youWillFind}>
              Inspired by the growing need for holistic employee management
              solutions, our project seeks to address the challenges faced by
              modern organizations in ensuring both productivity and employee
              well-being.
            </p>
          </div>
          <Button
            className={styles.button}
            endIcon={<img width="20px" height="20px" src={img} />}
            disableElevation={true}
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "16",
              background: "#7718eb",
              borderRadius: "100px",
              "&:hover": { background: "#7718eb" },
              width: 157,
              height: 52,
            }}
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
