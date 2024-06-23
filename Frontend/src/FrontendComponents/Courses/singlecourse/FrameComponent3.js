import styles3 from "./FrameComponent3.module.css";

const FrameComponent3 = () => {
  return (
    <section className={styles3.heading01Wrapper}>
      <div className={styles3.heading01}>
        <div className={styles3.mainHeading}>
          <div className={styles3.coversPrettyMuch}>
            Covers pretty much everything you need to know about UX
          </div>
        </div>
        <div className={styles3.subHeading}>
          <div className={styles3.lineWrapper}>
            <div className={styles3.line} />
          </div>
          <b className={styles3.aboutPublisher}>About Publisher</b>
        </div>
      </div>
    </section>
  );
};
export default FrameComponent3;
