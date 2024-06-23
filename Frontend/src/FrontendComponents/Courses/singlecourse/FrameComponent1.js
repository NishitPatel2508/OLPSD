import styles from "./FrameComponent1.module.css";

const FrameComponent1 = () => {
  return (
    <section className={styles.homeInner}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.image}>
          <div className={styles.bgParent}>
            <div className={styles.bg} />
            <img className={styles.imageIcon} alt="" src="/image-1@2x.png" />
          </div>
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.frameParent}>
            <div className={styles.frameGroup}>
              <div className={styles.heading01Parent}>
                <div className={styles.heading01}>
                  <div className={styles.subHeading}>
                    <div className={styles.lineWrapper}>
                      <div className={styles.line} />
                    </div>
                    <b className={styles.sussessStories}>Sussess Stories</b>
                  </div>
                  <div className={styles.mainHeading}>
                    <h1 className={styles.excelentCourseJoeContainer}>
                      <p className={styles.excelentCourse}>Excelent course.</p>
                      <p className={styles.joeIsThe}>
                        Joe is the best instructor!
                      </p>
                    </h1>
                  </div>
                </div>
                <div
                  className={styles.everythingIsExplained}
                >{`Everything is explained in an easy and straight to the point approach. Love the takeaways specially the ones at the end of the sections. I'ts bad that sometimes the audio is very very low, makes it tricky to hear even with headphones. `}</div>
              </div>
              <div className={styles.frameContainer}>
                <div className={styles.wrapperImageParent}>
                  <div className={styles.wrapperImage}>
                    <img
                      className={styles.imageIcon1}
                      alt=""
                      src="/image-2.svg"
                    />
                  </div>
                  <div className={styles.frameDiv}>
                    <div className={styles.jatinBaghelParent}>
                      <b className={styles.jatinBaghel}>Jatin Baghel</b>
                      <div className={styles.uiUxDesignerContainer}>
                        <span
                          className={styles.uiUxDesigner}
                        >{`UI UX Designer `}</span>
                        <span>at</span>
                        <span className={styles.frostInteractive}>
                          {" "}
                          Frost Interactive
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <img
                  className={styles.vectorIcon}
                  loading="lazy"
                  alt=""
                  src="/vector.svg"
                />
              </div>
            </div>
            <div className={styles.frameWrapper1}>
              <div className={styles.frameParent1}>
                <div className={styles.ellipseWrapper}>
                  <div className={styles.frameItem} />
                </div>
                <img
                  className={styles.frameInner}
                  loading="lazy"
                  alt=""
                  src="/group-16.svg"
                />
                <div className={styles.ellipseContainer}>
                  <div className={styles.ellipseDiv} />
                </div>
                <div className={styles.ellipseFrame}>
                  <div className={styles.frameChild1} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
