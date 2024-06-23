import Header from "../Header";
import Section1 from "../Section1";
import Section from "../Section";
import FrameComponent from "./FrameComponent";
import FrameComponent1 from "./FrameComponent1";
import FrameComponent2 from "./FrameComponent2";
import styles from "./AboutUs.module.css";

const AboutUs = () => {
  return (
    <>
      <Header />
      <div className={styles.aboutUs}>
        <FrameComponent2 />
        <FrameComponent1 />
        <div className={styles.aboutUsChild} />
        <FrameComponent />

        <footer className={styles.footer}>
          <Section1 />
          <Section />
        </footer>
      </div>
    </>
  );
};

export default AboutUs;
