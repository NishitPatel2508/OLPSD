import HeaderText from "./HeaderText";
import Video from "./Video";
import CourseMetrics from "./CourseMetrics";
// import FrameComponent from "../../FrameComponent";
import FrameComponent1 from "./FrameComponent1";
import FrameComponent2 from "../../FrameComponent2";
import FrameComponent3 from "./FrameComponent3";
import FrameComponent4 from "./FrameComponent4";
import FrameComponent5 from "./FrameComponent5";
// import FrameComponent6 from "./FrameComponent6.js";
import FrameComponent6 from "./FrameComponent6";
import styles from "./Home.module.css";

const Homesc = () => {
  return (
    <div className={styles.home}>
      {/* <Header /> */}
      <section className={styles.header}>
        <div className={styles.bg} />
        <div className={styles.breadcrumb}>
          <div className={styles.breadcrumb1}>
            <div className={styles.courses}>Courses</div>
            <div className={styles.iconOutlinedArrowRighWrapper}>
              <div className={styles.iconOutlinedArrowRigh}>
                <div className={styles.bgParent}>
                  <div className={styles.bg1} />
                  <div className={styles.color} />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.breadcrumb2}>
            <div className={styles.designCourses}>Design Courses</div>
            <div className={styles.iconOutlinedArrowRighContainer}>
              <div className={styles.iconOutlinedArrowRigh1}>
                <div className={styles.bgGroup}>
                  <div className={styles.bg2} />
                  <div className={styles.color1} />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.breadcrumb3}>
            <div className={styles.iconOutlinedArrowRigh2}>
              <div className={styles.bg3} />
              <div className={styles.color2} />
            </div>
            <div className={styles.webDesign}>Web Design</div>
          </div>
        </div>
        <div className={styles.headerTextParent}>
          <HeaderText />
          <Video />
        </div>
      </section>
      <CourseMetrics />
      <FrameComponent6 />
      <FrameComponent5 />
      <FrameComponent4 />
      <FrameComponent3 />
      <FrameComponent2 />
      <FrameComponent1 />
      {/* <FrameComponent /> */}
      {/* <Footer /> */}
    </div>
  );
};

export default Homesc;
