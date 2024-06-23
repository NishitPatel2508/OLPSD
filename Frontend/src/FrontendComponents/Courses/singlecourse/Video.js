import styles from "./Video.module.css";

const Video = () => {
  return (
    <div className={styles.video}>
      <img className={styles.imageIcon} alt="" src="/image@2x.png" />
      <div className={styles.play}>
        <div className={styles.iconFilledVideo}>
          <div className={styles.bgParent}>
            <div className={styles.bg} />
            <div className={styles.color} />
          </div>
        </div>
        <h3 className={styles.watchDemo}>Watch Demo</h3>
      </div>
      <img className={styles.dotsIcon} alt="" src="/dots-1.svg" />
    </div>
  );
};

export default Video;
