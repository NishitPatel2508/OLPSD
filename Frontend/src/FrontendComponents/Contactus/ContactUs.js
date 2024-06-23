import FrameComponent1 from "./FrameComponent1";
import Section1 from "../Section1";
import Section from "../Section";
import Header from "../Header";
import styles from "./ContactUs.module.css";
import img from "./i1.png";

const ContactUs = () => {
  return (
    <div className={styles.contactUs}>
      <div className={styles.contactUsChild} />
      <img className={styles.contactUsItem} alt="" src={img} />
      <section className={styles.frameParent}>
        <Header />
        <div className={styles.mainContentWrapper}>
          <FrameComponent1 />
        </div>
      </section>
      <footer className={styles.footer}>
        <Section1 />
        <Section />
      </footer>
    </div>
  );
};
export default ContactUs;
