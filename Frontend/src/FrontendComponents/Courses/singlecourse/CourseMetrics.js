import styles from "./CourseMetrics.module.css";

const CourseMetrics = () => {
  return (
    <section className={styles.courseMetrics}>
      <div className={styles.bg} />
      <div className={styles.courseMetrics1}>
        <div className={styles.div}>24+</div>
        <div className={styles.hoursOfCourse}>Hours of Course</div>
      </div>
      <div className={styles.courseMetrics2}>
        <div className={styles.div1}>18+</div>
        <div className={styles.totalAssignments}>Total Assignments</div>
      </div>
      <div className={styles.courseMetrics3}>
        <div className={styles.div2}>20+</div>
        <div className={styles.videoLessons}>Video Lessons</div>
      </div>
      <div className={styles.courseMetrics4}>
        <div className={styles.div3}>4,312+</div>
        <div className={styles.studentsEnrolled}>Students Enrolled</div>
      </div>
    </section>
  );
};

export default CourseMetrics;
