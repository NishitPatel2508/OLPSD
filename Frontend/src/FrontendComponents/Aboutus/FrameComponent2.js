import { Button } from "@mui/material";
import styles from "./FrameComponent2.module.css";
import img from "./arrow.png";
const FrameComponent2 = () => {
  return (
    <section className={styles.aboutUsInner}>
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.aboutUsParent}>
            <h1 className={styles.aboutUs}>About Us</h1>
            <h1 className={styles.weekendUxProvidingContainer}>
              <span>Brainwave</span>
              <span className={styles.providingTheBest}>
                {" "}
                providing the best opportunities to the students around the
                glob.
              </span>
            </h1>
            <div className={styles.weekendUxIs}>
              Our mission at Intelligent Employee Productivity and Wellness
              Dashboard is to revolutionize the way organizations manage and
              support their workforce. We are deeply committed to leveraging
              cutting-edge technology to enhance employee productivity and
              well-being, thereby fostering healthier and more sustainable work
              environments.
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
              Join Us
            </Button>
          </div>
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.rectangleWrapper}>
            <img
              className={styles.frameChild}
              loading="lazy"
              alt=""
              src="/images/aboutus1.png"
            />
          </div>
          <div className={styles.rectangleParent}>
            <div className={styles.frameItem} />
            <img
              className={styles.frameInner}
              loading="lazy"
              alt=""
              src="/images/aboutus2.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default FrameComponent2;
