import styles4 from "./FrameComponent2.module.css";

const FrameComponent2 = () => {
  return (
    <section className={styles4.homeInner}>
      <div className={styles4.joeHasBeenPreachingAndPraParent}>
        <div className={styles4.joeHasBeen}>
          Joe has been preaching and practicing the gospel of User Experience
          (UX) to Fortune 100, 500 and Government organizations for nearly three
          decades. That work includes commercial industry leaders like Google
          Ventures, Kroll/Duff + Phelps, Broadridge, Conde Nast, Johns Hopkins,
          Mettler-Toledo, PHH Arval, SC Johnson and Wolters Kluwer, as well as
          government agencies like the National Science Foundation, National
          Institutes of Health and the Dept. of Homeland Security.
        </div>
        <div className={styles4.frameParent}>
          <div className={styles4.frameGroup}>
            <div className={styles4.frameContainer}>
              <div className={styles4.anudeepAyyagariParent}>
                <h1 className={styles4.anudeepAyyagari}>Anudeep Ayyagari</h1>
                <div className={styles4.iconFilledCheckWrapper}>
                  <div className={styles4.iconFilledCheck}>
                    <div className={styles4.bound} />
                    <div className={styles4.color} />
                  </div>
                </div>
              </div>
              <div
                className={styles4.yearUx}
              >{`29-year UX + Design Veteran; Consultant, Author & Speaker`}</div>
            </div>
            <div className={styles4.line} />
            <div className={styles4.joeNatoliHas}>
              Joe Natoli has launched five successful online courses with Udemy
              on the topics of User Experience (UX) and User Interface (UI)
              Design, with more than 180,000+ students enrolled to date.
            </div>
          </div>
          <div className={styles4.bgParent}>
            <div className={styles4.bg} />
            <b className={styles4.readMore}>Read More...</b>
          </div>
        </div>
        <div className={styles4.rectangleParent}>
          <img
            className={styles4.frameChild}
            loading="lazy"
            alt=""
            src="/rectangle-35@2x.png"
          />
          <div className={styles4.iconAndTextParent}>
            <div className={styles4.iconAndText}>
              <img
                className={styles4.iconFilledStar}
                alt=""
                src="/icon--filled--star-1.svg"
              />
              <div className={styles4.instructorRating}>
                <b>4.5</b>
                <span> Instructor Rating</span>
              </div>
            </div>
            <div className={styles4.iconAndText1}>
              <img
                className={styles4.iconFilledRatinngs}
                loading="lazy"
                alt=""
                src="/icon--filled-ratinngs.svg"
              />
              <div className={styles4.reviews}>
                <b>28,707</b>
                <span> Reviews</span>
              </div>
            </div>
            <div className={styles4.iconAndText2}>
              <img
                className={styles4.iconFilledStudents}
                loading="lazy"
                alt=""
                src="/icon--filled-students.svg"
              />
              <div className={styles4.students}>
                <b>155,242</b>
                <span> Students</span>
              </div>
            </div>
            <div className={styles4.iconAndText3}>
              <div className={styles4.iconFilledVideo}>
                <div className={styles4.bgGroup}>
                  <div className={styles4.bg1} />
                  <div className={styles4.color1} />
                </div>
              </div>
              <div className={styles4.courses}>
                <b>8</b>
                <span> Courses</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default FrameComponent2;
