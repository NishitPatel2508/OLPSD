import { Button } from "@mui/material";
import Header from "./Header";
import GroupComponent from "./GroupComponent";
import CodecovLogoBlack from "./CodecovLogoBlack";
import UserTestingLogoBlack from "./UserTestingLogoBlack";
import MagicLeapLogoBlack from "./MagicLeapLogoBlack";
import UserImages from "./UserImages";
import MainContentArea from "./MainContentArea";
import FrameComponent2 from "./FrameComponent2";
import FrameComponent from "./FrameComponent";
import FrameComponent1 from "./FrameComponent1";
import Section1 from "./Section1";
import Section from "./Section";

import styles from "./DesignFile.module.css";
// import child from "../images"
// import OnlineEducation from "./images"

const DesignFile = () => {
  return (
    <div className={styles.designFile}>
      <section className={styles.navigation}>
        <img className={styles.blurIcon} alt="" />

        <img
          className={styles.navigationItem}
          alt=""
          src="/images/Group458.png"
        />
      </section>
      <div className={styles.designFileChild} />
      <section className={styles.header}>
        <div className={styles.headerChild} />
        <div className={styles.maskGroup}>
          <Header />
          <div className={styles.maskGroupChild} />
          <div className={styles.div}>
            <img
              className={styles.progressCircleIcon}
              loading="lazy"
              alt=""
              src="/images/Progress-circle.png"
            />

            <b className={styles.k}>50+</b>
            <div className={styles.onlineCourses}>Online Courses</div>
          </div>
          <div className={styles.div1}>
            <div className={styles.wrapperIcon}>
              <img
                className={styles.icon}
                loading="lazy"
                alt=""
                src="/images/icon-2.png"
              />
            </div>
            <b className={styles.k1}>2000+</b>
            <div className={styles.videoCourses}>Videoes</div>
          </div>
          <div className={styles.div2}>
            <div className={styles.wrapperIcon1}>
              <img className={styles.icon1} alt="" src="/images/icon.png" />
            </div>
            <div className={styles.tutors}>Tutors</div>
            <b className={styles.tutorsCount}>250+</b>
          </div>
          <div className={styles.hero}>
            <div className={styles.heroContent}>
              <div className={styles.upYourSkillsToAdvanceYourParent}>
                <h1 className={styles.upYourSkillsContainer}>
                  <p className={styles.upYourSkills}>
                    <span>{`up your `}</span>
                    <span className={styles.skills}>skills</span>
                  </p>
                  <p className={styles.toAdvanceYourCareerPath}>
                    <span className={styles.to}>{`to `}</span>
                    <span>advance</span>
                    <span className={styles.your}>{` your `}</span>
                    <span className={styles.career}>career</span>
                    <span className={styles.path}> path</span>
                  </p>
                </h1>
                <div className={styles.providesYouWith}>
                  Provides you with the latest online learning system and
                  material that help your knowledge growing.
                </div>
              </div>
              <div className={styles.heroButtons}>
                <Button
                  href="/allCourses"
                  className={styles.button}
                  disableElevation={true}
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    color: "#fff",
                    fontSize: "18",
                    background: "#7e56d9",
                    borderRadius: "8px",
                    "&:hover": { background: "#7e56d9" },
                  }}
                >
                  Get Started
                </Button>
              </div>
            </div>
            <div className={styles.featureCards}>
              <div className={styles.frameParent}>
                <img
                  className={styles.frameChild}
                  loading="lazy"
                  alt=""
                  src="/images/Group518.png"
                />
                <div className={styles.publicSpeaking}>Public Speaking</div>
              </div>
              <div className={styles.briefcaseParent}>
                <img
                  className={styles.briefcaseIcon}
                  loading="lazy"
                  alt=""
                  src="/images/Briefcase.png"
                />
                <div className={styles.careerOriented}>Career-Oriented</div>
              </div>
            </div>
          </div>
          <div className={styles.collaboration}>
            <p className={styles.p}>
              <b>250+</b>
            </p>
            <p className={styles.collaboration1}>Collaboration</p>
          </div>
          <img
            className={styles.groupIcon}
            loading="lazy"
            alt=""
            src="/images/dl.png"
          />
          <CodecovLogoBlack />
          <UserTestingLogoBlack />
          <MagicLeapLogoBlack />
          <UserImages />
        </div>
      </section>
      <MainContentArea />
      <FrameComponent2 />
      <FrameComponent1 />
      <FrameComponent />
      <footer className={styles.footer}>
        <Section1 />
        <Section />
      </footer>
    </div>
  );
};
export default DesignFile;
