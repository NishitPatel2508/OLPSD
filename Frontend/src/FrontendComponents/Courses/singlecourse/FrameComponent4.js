import CourseContentBarClosed1 from "./CourseContentBarClosed1";
import CourseContentBarClosed from "./CourseContentBarClosed";
import styles2 from "./FrameComponent4.module.css";

const FrameComponent4 = () => {
  return (
    <section className={styles2.homeInner}>
      <div className={styles2.heading01Parent}>
        <div className={styles2.heading01}>
          <div className={styles2.subHeading}>
            <div className={styles2.line} />
            <b className={styles2.ccourseContent}>Course Content</b>
          </div>
          <div className={styles2.mainHeading}>
            <h1
              className={styles2.ourCoursesAre}
            >{`Our courses are balanced mix of videos & articles`}</h1>
          </div>
        </div>
        <div className={styles2.frameParent}>
          <div className={styles2.frameGroup}>
            <div className={styles2.lessonsParent}>
              <div className={styles2.lessons}>10 Lessons</div>
              <div className={styles2.iconOutlinedBullet}>
                <div className={styles2.bgParent}>
                  <div className={styles2.bg} />
                  <div className={styles2.color} />
                </div>
              </div>
              <div className={styles2.videos}>20 Videos</div>
              <div className={styles2.iconOutlinedBullet1}>
                <div className={styles2.bgGroup}>
                  <div className={styles2.bg1} />
                  <div className={styles2.color1} />
                </div>
              </div>
              <div className={styles2.articles}>20 Articles</div>
              <div className={styles2.iconOutlinedBullet2}>
                <div className={styles2.bgContainer}>
                  <div className={styles2.bg2} />
                  <div className={styles2.color2} />
                </div>
              </div>
              <div className={styles2.assignments}>18 Assignments</div>
              <div className={styles2.iconOutlinedBullet3}>
                <div className={styles2.frameDiv}>
                  <div className={styles2.bg3} />
                  <div className={styles2.color3} />
                </div>
              </div>
              <div className={styles2.h32mComplition}>
                24h 32m Complition Time
              </div>
            </div>
            <b className={styles2.expandAllLessons}>Expand All Lessons</b>
          </div>
          <div className={styles2.courseContentBarClosedParent}>
            <CourseContentBarClosed1
              courseOverview="Course Overview"
              sections15Minutes="2 Sections . 15 minutes"
            />
            <CourseContentBarClosed
              definitionPlanningForSucc="Definition: Planning for Success"
              sections30Minutes="2 Sections . 30 minutes"
            />
            <CourseContentBarClosed
              definitionPlanningForSucc="Definition: Planning for Success Part 02"
              sections30Minutes="4 Sections . 84 minutes"
            />
            <CourseContentBarClosed
              definitionPlanningForSucc="Information Architecture: Creating a Solid Foundation"
              sections30Minutes="6 Sections . 120 minutes"
            />
            <div className={styles2.courseContentBarOpen}>
              <div className={styles2.bg4} />
              <img className={styles2.bgIcon} alt="" src="/bg.svg" />
              <div className={styles2.frameContainer}>
                <div className={styles2.iconOutlinedMinusWrapper}>
                  <div className={styles2.iconOutlinedMinus}>
                    <div className={styles2.bgParent1}>
                      <div className={styles2.bg5} />
                      <div className={styles2.color4} />
                    </div>
                  </div>
                </div>
                <div className={styles2.informationArchitectureCrea}>
                  Information Architecture: Creating a Solid Foundation Part 02
                </div>
                <div className={styles2.sections89}>
                  5 Sections . 89 minutes
                </div>
              </div>
              <div className={styles2.lessonParent}>
                <div className={styles2.lesson}>
                  <div className={styles2.iconFilledVideo}>
                    <div className={styles2.bgParent2}>
                      <div className={styles2.bg6} />
                      <div className={styles2.color5} />
                    </div>
                  </div>
                  <div className={styles2.exerciseTurningInformation}>
                    Exercise: Turning Information Priority into an IA Model
                  </div>
                  <div className={styles2.watchDemo}>Watch Demo</div>
                  <div className={styles2.minutes}>6 minutes</div>
                </div>
                <div className={styles2.lesson1}>
                  <img
                    className={styles2.iconFilledArticle}
                    loading="lazy"
                    alt=""
                    src="/icon--filled--article.svg"
                  />
                  <div className={styles2.iaModelsWhichOnesRightFWrapper}>
                    <div className={styles2.iaModelsWhich}>
                      IA Models: Which One's Right for My Site?
                    </div>
                  </div>
                  <div className={styles2.watchDemo1}>Watch Demo</div>
                  <div className={styles2.minutes1}>8 minutes</div>
                </div>
                <div className={styles2.lesson2}>
                  <div className={styles2.iconFilledVideo1}>
                    <div className={styles2.bgParent3}>
                      <div className={styles2.bg7} />
                      <div className={styles2.color6} />
                    </div>
                  </div>
                  <div className={styles2.hierarchicalTreeIaModelWrapper}>
                    <div className={styles2.hierarchicalTreeIa}>
                      Hierarchical Tree IA Model
                    </div>
                  </div>
                  <div className={styles2.watchDemo2}>Watch Demo</div>
                  <div className={styles2.minutes2}>15 minutes</div>
                </div>
                <div className={styles2.lesson3}>
                  <div className={styles2.iconFilledVideoParent}>
                    <div className={styles2.iconFilledVideo2}>
                      <div className={styles2.bgParent4}>
                        <div className={styles2.bg8} />
                        <div className={styles2.color7} />
                      </div>
                    </div>
                    <div className={styles2.combiningIaModels}>
                      Combining IA Models
                    </div>
                  </div>
                  <div className={styles2.watchDemo3}>Watch Demo</div>
                  <div className={styles2.minutes3}>20 minutes</div>
                </div>
                <div className={styles2.lesson4}>
                  <img
                    className={styles2.iconFilledArticle1}
                    alt=""
                    src="/icon--filled--article.svg"
                  />
                  <div className={styles2.toolsForCreatingIaModelsWrapper}>
                    <div className={styles2.toolsForCreating}>
                      Tools for Creating IA Models
                    </div>
                  </div>
                  <div className={styles2.watchDemo4}>Watch Demo</div>
                  <div className={styles2.minutes4}>40 minutes</div>
                </div>
              </div>
            </div>
            <CourseContentBarClosed
              definitionPlanningForSucc="Information Architecture: Creating a Solid Foundation Part 03"
              sections30Minutes="8 Sections . 180 minutes"
            />
            <CourseContentBarClosed
              definitionPlanningForSucc={`Design: Information, Interaction & Interfaces`}
              sections30Minutes="4 Sections . 60 minutes"
            />
            <CourseContentBarClosed
              definitionPlanningForSucc={`Design: Information, Interaction & Interfaces Part 02`}
              sections30Minutes="2 Sections . 58 minutes"
            />
            <CourseContentBarClosed
              definitionPlanningForSucc={`Design: Information, Interaction & Interfaces Part 03`}
              sections30Minutes="3 Sections . 32 minutes"
            />
            <CourseContentBarClosed1
              courseOverview={`Launch & Beyond`}
              sections15Minutes="4 Sections . 84 minutes"
              propMarginTop="-1px"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent4;
