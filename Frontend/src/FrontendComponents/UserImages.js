import styles from "./UserImages.module.css";

const UserImages = () => {
  return (
    <div className={styles.userImages}>
       {/* <img className={styles.userImagesChild} alt="" src="/images/Group515.png" /> */}

      <div className={styles.placeholder} />
      <div className={styles.userImage}>
        <div className={styles.placeholder1} />
        <div className={styles.userImageMask}>
          <div className={styles.userImageMaskChild} />
          <img
            className={styles.maskGroupIcon}
            alt=""
            src="/images/child.png"
          />
        </div>
      </div>
      <div className={styles.userImagesItem} />
    </div>
  );
};
export default UserImages;
