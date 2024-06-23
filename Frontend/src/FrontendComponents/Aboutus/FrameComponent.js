import styles from "./FrameComponent.module.css";

const FrameComponent = () => {
  return (
    <section className={styles.loopStructure}>
      <div className={styles.dataSplitter}>
        <div className={styles.formulaSolver}>
          <div className={styles.valueComparatorParent}>
            <div className={styles.valueComparator}>
              <h3 className={styles.ourBenefits}>Our Benefits</h3>
            </div>
            <h1 className={styles.byJoiningWeekens}>
              By Joining Brainwave Platform, One Can Avail a Lot Of Benefits.
            </h1>
          </div>
        </div>
        <div className={styles.inputProcessor}>
          <div className={styles.installOurTopRated}>
            We are deeply committed to leveraging cutting-edge technology to
            enhance employee productivity and well-being, thereby fostering
            healthier and more sustainable work environments.
          </div>
        </div>
        <div className={styles.benefitCardParent}>
          <div className={styles.benefitCard}>
            <div className={styles.cardNumber}>
              <div className={styles.patternMatcher} />
              <div className={styles.div}>01</div>
            </div>
            <h3 className={styles.standardization}>Course Catalogue</h3>
            <div className={styles.whenWorkingInContainer}>
              <span>{` Display a comprehensive 
catalogue of courses available on the platform, 
including course descriptions, learning objectives, 
duration, and instructor information. `}</span>
            </div>
          </div>
          <div className={styles.benefitCard1}>
            <div className={styles.cardNumber1}>
              <div className={styles.cardNumberChild} />
              <div className={styles.div1}>02</div>
            </div>
            <h3 className={styles.reducedCosts}>Multimedia Content</h3>
            <div className={styles.withWeekendUxContainer}>
              <span>{`Provide interactive learning 
materials such as video lectures, presentations, 
quizzes, assignments, and hands-on exercises to 
engage learners `}</span>
            </div>
          </div>
          <div className={styles.benefitCard2}>
            <div className={styles.cardNumber2}>
              <div className={styles.cardNumberItem} />
              <div className={styles.div2}>03</div>
            </div>
            <h3 className={styles.moreCustomization}>Instructor Dashboards</h3>
            <div className={styles.ustLikeLearnersContainer}>
              <span>{`Provide instructors with 
tools to create and manage courses, upload course 
content, track learner progress, and interact with 
learners.`}</span>
            </div>
          </div>
          {/* <div className={styles.benefitCard3}>
            <div className={styles.cardNumber3}>
              <div className={styles.cardNumberInner} />
              <div className={styles.div3}>04</div>
            </div>
            <h3 className={styles.affordablePricing}>Affordable Pricing</h3>
            <div className={styles.withWeekendUxContainer1}>
              <span>
                <span className={styles.weekend}>Weekend</span>
                {`Visualizing individual and team productivity metrics, including project completion rates and task efficiency, to optimize performance. `}
              </span>
            </div>
          </div>
          <div className={styles.benefitCard4}>
            <div className={styles.cardNumber4}>
              <div className={styles.ellipseDiv} />
              <div className={styles.div4}>05</div>
            </div>
            <h3 className={styles.learnerSatisfaction}>Learner Satisfaction</h3>
            <div className={styles.ifYouReallyContainer}>
              <span>{`If you really want students to retain what they learn, you’ll need to aim for high satisfaction rates. Bad ... `}</span>
              <span className={styles.readMore4}>Read More</span>
            </div>
          </div>
          <div className={styles.benefitCard5}>
            <div className={styles.cardNumber5}>
              <div className={styles.cardNumberChild1} />
              <div className={styles.div5}>06</div>
            </div>
            <h3 className={styles.multimediaMaterials}>Multimedia Materials</h3>
            <div className={styles.oneOfTheContainer}>
              <span>{`One of the main reasons why custom eLearning is effective is that it’s the perfect delivery method for ... `}</span>
              <span className={styles.readMore5}>Read More</span>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
