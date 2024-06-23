import { useMemo } from "react";
import styles from "./CourseContentBarClosed1.module.css";

const CourseContentBarClosed1 = ({
  courseOverview,
  sections15Minutes,
  propMarginTop,
}) => {
  const courseContentBarClosedStyle = useMemo(() => {
    return {
      marginTop: propMarginTop,
    };
  }, [propMarginTop]);

  return (
    <div
      className={styles.courseContentBarClosed}
      style={courseContentBarClosedStyle}
    >
      <div className={styles.bg} />
      <div className={styles.iconOutlinedAddParent}>
        <div className={styles.iconOutlinedAdd}>
          <div className={styles.bgParent}>
            <div className={styles.bg1} />
            <div className={styles.color} />
          </div>
        </div>
        <div className={styles.courseOverviewWrapper}>
          <div className={styles.courseOverview}>{courseOverview}</div>
        </div>
      </div>
      <div className={styles.sections15}>{sections15Minutes}</div>
    </div>
  );
};

export default CourseContentBarClosed1;
