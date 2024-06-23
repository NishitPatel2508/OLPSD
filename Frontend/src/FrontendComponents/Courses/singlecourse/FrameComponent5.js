// import { Button } from "@mui/material";
import { Box, Typography, useTheme, Button, Link, Avatar } from "@mui/material";
import { useState } from "react";
// import { Button, Navbar, Nav } from "react-bootstrap";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import styles1 from "./FrameComponent5.module.css";
// import styles11 from "./FrameComponent6.module.css";
import Container from "react-bootstrap/Container";

const FrameComponent5 = () => {
  return (
    <section className={styles1.homeInner}>
      <div className={styles1.frameParent}>
        <div className={styles1.heading2Parent}>
          <div className={styles1.heading2}>
            <div className={styles1.subHeading}>
              <div className={styles1.lineWrapper}>
                <div className={styles1.line} />
              </div>
              <b className={styles1.aboutCourse}>About Course</b>
            </div>
          </div>
          <div className={styles1.frameGroup}>
            <div className={styles1.detailsParent}>
              <b className={styles1.details}>Details:</b>
              <div className={styles1.textBox}>
                This course will teach you everything you need to know about UX,
                including design, content, and coding. And you'll learn from the
                ground up, so it doesn't matter how much experience you have
                when you start.
              </div>
            </div>
            <div className={styles1.textBoxParent}>
              <div className={styles1.textBox1}>
                You'll be exposed to principles and strategies, but, more
                importantly, you'll learn how to actually apply these abstract
                concepts by coding three different websites for three very
                different audiences.
              </div>
              <div className={styles1.bulletPoint}>
                <div className={styles1.iconOutlinedBullet}>
                  <div className={styles1.bgParent}>
                    <div className={styles1.bg} />
                    <div className={styles1.color} />
                  </div>
                </div>
                <div
                  className={styles1.applyUxStrategies}
                >{`Apply UX strategies to a site's content & design`}</div>
              </div>
              <div className={styles1.bulletPoint1}>
                <div className={styles1.iconOutlinedBullet1}>
                  <div className={styles1.bgGroup}>
                    <div className={styles1.bg1} />
                    <div className={styles1.color1} />
                  </div>
                </div>
                <div className={styles1.understandInformationArchite}>
                  Understand Information Architecture to enhance the content on
                  your website
                </div>
              </div>
              <div className={styles1.bulletPointParent}>
                <div className={styles1.bulletPoint2}>
                  <div className={styles1.iconOutlinedBullet2}>
                    <div className={styles1.bgContainer}>
                      <div className={styles1.bg2} />
                      <div className={styles1.color2} />
                    </div>
                  </div>
                  <div className={styles1.knowWhatDictates}>
                    Know what dictates how your website should look
                  </div>
                </div>
                <div className={styles1.frameDiv}>
                  <div className={styles1.bg3} />
                  <div className={styles1.bulletPointWrapper}>
                    <div className={styles1.bulletPoint3}>
                      <div className={styles1.iconOutlinedBullet3}>
                        <div className={styles1.bgParent1}>
                          <div className={styles1.bg4} />
                          <div className={styles1.color3} />
                        </div>
                      </div>
                      <div className={styles1.designAndCode}>
                        Design and code a B2B website, a B2C blog, and an
                        ecommerce site
                      </div>
                    </div>
                  </div>
                  <b className={styles1.readMore}>Read More...</b>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles1.featuresParent}>
          <div className={styles1.features}>
            <img
              className={styles1.iconsFeaturesCertificate}
              loading="lazy"
              alt=""
              src="/images/infinite.png"
            />
            <div className={styles1.featuresInner}>
              <div className={styles1.authenticCertificateParent}>
                <div className={styles1.authenticCertificate}>
                  Life Time Accessibility
                </div>
                <div className={styles1.earnACertificate}>
                  Set and maintain flexible deadlines.
                </div>
              </div>
            </div>
          </div>
          <div className={styles1.features}>
            <div className={styles1.features1}>
              <Card sx={{ width: 385, height: 400 }}>
                <CardMedia
                  sx={{ height: 200 }}
                  // image={`${element.courseImg}`}
                  // title="green iguana"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    component="div"
                    style={{ fontWeight: "bold", fontSize: "15px" }}
                  >
                    Nishit
                  </Typography>
                  <Box
                    gap="5px"
                    marginTop="5px"
                    display="flex"
                    justifyContent="space-between"
                  >
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="div"
                      style={{ fontWeight: "bold", fontSize: "15px" }}
                    >
                      ₹ 500
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="div"
                      style={{ fontWeight: "bold", fontSize: "15px" }}
                    >
                      discount : 15%
                    </Typography>
                  </Box>
                  <Box
                    gap="5px"
                    marginTop="5px"
                    display="flex"
                    justifyContent="start"
                    alignItems="center"
                  >
                    <Avatar
                      alt="Remy Sharp"
                      // src={element.
                    />
                    <Typography
                      gutterBottom
                      component="div"
                      style={{ fontWeight: "bold", fontSize: "15px" }}
                    >
                      {/* {`${element.instructor.name}`} */}
                      Nishit Patel
                    </Typography>
                  </Box>
                </CardContent>
                <Box>
                  <CardActions>
                    <Button
                      variant="contained"
                      color="primary"
                      fullWidth
                      // onClick={() => {
                      //   setDetailsToLocalStorage(element._id);
                      // }}
                      style={{
                        textTransform: "none",
                        color: "#fff",
                        fontSize: "18",
                        background: "#7718eb",
                        borderRadius: "8px",
                        border: "none",
                        "&:hover": { background: "#f4ebff" },
                      }}
                    >
                      Buy Now
                    </Button>
                    {/* <Button
                        variant="contained"
                        color="error"
                        // onClick={() => {
                        //   handleDelete(element._id);
                        // }}
                      >
                        Delete
                      </Button> */}
                  </CardActions>
                </Box>
              </Card>
            </div>
            {/* <div className={styles1.features2}>
              <img
                className={styles1.iconsFeaturesLifeTime}
                loading="lazy"
                alt=""
                src="/icons--features--life-time.svg"
              />
              <div className={styles1.featuresInner1}>
                <div className={styles1.lifeTimeAccessibilityParent}>
                  <div className={styles1.lifeTimeAccessibility}>
                    Life Time Accessibility
                  </div>
                  <div className={styles1.setAndMaintain}>
                    Set and maintain flexible deadlines.
                  </div>
                </div>
              </div>
            </div>
            <div className={styles1.features3}>
              <img
                className={styles1.iconsFeaturesBeginnerLe}
                loading="lazy"
                alt=""
                src="/icons--features--beginner-level.svg"
              />
              <div className={styles1.featuresInner2}>
                <div className={styles1.beginnerLevelParent}>
                  <div className={styles1.beginnerLevel}>Beginner Level</div>
                  <div className={styles1.noPriorExperience}>
                    No prior experience required.
                  </div>
                </div>
              </div>
            </div>
            <div className={styles1.features4}>
              <button className={styles1.iconsFeaturesSubtitles}>
                <div className={styles1.bg5} />
                <img className={styles1.frameIcon} alt="" src="/frame.svg" />
              </button>
              <div className={styles1.featuresInner3}>
                <div className={styles1.englishSubtitlesParent}>
                  <div className={styles1.englishSubtitles}>
                    Subtiteles Support
                  </div>
                  <div
                    className={styles1.englishHindi}
                  >{`English, Hindi & Marathi`}</div>
                </div>
              </div>
            </div> */}
          </div>
          {/* <Button
            className={styles1.bottunOutlinedWithIcon}
            // startIcon={
            //   <img
            //     width="24px"
            //     height="24px"
            //     src="/icon--filled--download.svg"
            //   />
            // }
            disableElevation={true}
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "14",
              background: "#7718eb",
              border: "#3758b2 solid 1px",
              borderRadius: "4px",
              "&:hover": { background: "#380479" },
              height: 40,
            }}
          >
            Buy Now
          </Button> */}
        </div>
      </div>
    </section>
  );
};

export default FrameComponent5;
