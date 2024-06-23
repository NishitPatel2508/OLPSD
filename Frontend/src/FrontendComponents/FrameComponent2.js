import { useEffect } from "react";
import { Button } from "@mui/material";
import BlogPostCard from "./BlogPostCard";
import TeamMemberWrap from "./TeamMemberWrap";
import styles from "./FrameComponent2.module.css";
// import "./FrameComponent2.css";

const FrameComponent2 = () => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);
  return (
    <section className={styles.popularContentWrapper}>
      <div className={styles.popularContent} data-animate-on-scroll>
        <div className={styles.subheading}>Explore Programs</div>
        <div className={styles.headingParent}>
          <h1 className={styles.heading}>Our Most Popular Class</h1>
          <div className={styles.popularCards}>
            <div className={styles.cardGrid}>
              <div className={styles.supportingText}>
                Let's join our famous class, the knowledge provided will
                definitely be useful for you.
              </div>
              <div className={styles.popularCourseCards}>
                <BlogPostCard
                  hr12Mins="08 hr 12 mins"
                  heading="Bootcamp of python"
                  supportingText="Beginer level of course for every programmer who wants to learn python."
                  prop="4.3"
                  prop1="(16,325)"
                  avatar="/images/n1.jpg"
                  text="Nishit Thakkar"
                  prop2="Rs. 2500"
                  propBackgroundImage="url('/images/pythonimg.png')"
                />

                <BlogPostCard
                  hr12Mins="01 hr 2 mins"
                  heading="Bootcamp of MERN Stack "
                  supportingText="Beginer level of course for every programmer who wants to learn MERN."
                  prop="4.2"
                  prop1="(125)"
                  avatar="/images/i3.png"
                  text="Esther Howard"
                  prop2="Rs. 1170"
                  propPadding="var(--padding-2xs) var(--padding-3xs) var(--padding-181xl)"
                  propMinWidth="81px"
                  propMinWidth1="34px"
                  propMinWidth2="100px"
                  propBackgroundImage="url('/images/mern.png')"
                />
              </div>
              {/* <div className={styles.cardGridInner}>
                {/* <img
                  className={styles.frameChild}
                  alt=""
                  src="/images/i3.png"
                /> 
              </div>
              <div className={styles.buttonWrapper}>
                <Button
                  className={styles.button}
                  disableElevation={true}
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    color: "#101828",
                    fontSize: "14",
                    background: "#f9fafb",
                    borderRadius: "8px",
                    "&:hover": { background: "#f9fafb" },
                    width: 173,
                  }}
                >
                  Explore All Programs
                </Button>
              </div> */}
            </div>
            <div className={styles.headingAndSupportingTextParent}>
              <div className={styles.headingAndSupportingText}>
                <div className={styles.headingAndSubheading1}>
                  <div className={styles.subheading2}>Tutors</div>
                  <h1 className={styles.heading2}>Meet the Heroes</h1>
                </div>
                <div className={styles.ourPhilosophyIs}>
                  On Ed-Circle, instructors from all over the world instruct
                  millions of students. We offer the knowledge and abilities.
                </div>
              </div>
              <div className={styles.content1}>
                <TeamMemberWrap
                  avatar="/images/i3.png"
                  name1="Theresa Webb"
                  role="Application Support Analyst Lead"
                  supportingText="Former co-founder of Opendoor. Early staff at Spotify and Clearbit."
                />
                <TeamMemberWrap
                  avatar="/images/i2.png"
                  name1="Courtney Henry"
                  role="Director, Undergraduate Analytics and Planning"
                  supportingText="Lead engineering teams at Figma, Pitch, and Protocol Labs."
                  teamMemberOpacity="unset"
                />

                <div className={styles.teamMemberWrapWrapper}>
                  <div className={styles.teamMemberWrap} data-animate-on-scroll>
                    <img
                      className={styles.avatarIcon1}
                      alt=""
                      src="/images/i1.png"
                    />
                    <div className={styles.textAndSocialLinks}>
                      <div className={styles.nameAndSupportingText}>
                        <div className={styles.nameAndRole}>
                          <div className={styles.name}>Albert Flores</div>
                          <div className={styles.role}>Career Educator</div>
                        </div>
                        <div className={styles.supportingText3}>
                          <p className={styles.formerPmFor}>
                            Former PM for Linear, Lambda School, and On Deck.
                          </p>
                        </div>
                      </div>
                      <div className={styles.socialIcons}>
                        <img
                          className={styles.socialIcon}
                          alt=""
                          src="/images/m.png"
                        />
                        <img
                          className={styles.socialIcon1}
                          alt=""
                          src="/images/m.png"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <TeamMemberWrap
                  avatar="/images/i4.png"
                  name1="Marvin McKinney"
                  role={`Co-op & Internships Program & Operations Manager`}
                  supportingText="Former frontend dev for Linear, Coinbase, and Postscript."
                  teamMemberOpacity="unset"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent2;
