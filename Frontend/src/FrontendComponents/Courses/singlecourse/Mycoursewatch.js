// import FrameComponent2 from "./FrameComponent2";
// import FrameComponent3 from "./FrameComponent3";
// import FrameComponent4 from "./FrameComponent4";
// import FrameComponent5 from "./FrameComponent5";
import FrameComponent6 from "./FrameComponent6";
// import FrameComponent1 from "./FrameComponent1";

import React, { useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  Avatar,
  Modal,
  IconButton,
} from "@mui/material";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FileOpenIcon from "@mui/icons-material/FileOpen";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import CloseIcon from "@mui/icons-material/Close";
import CourseMetrics from "./CourseMetrics";
import Header from "../../Header";
import Section from "../../Section";
import Section1 from "../../Section1";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
// import CourseContentBarClosed1 from "./CourseContentBarClosed1";
// import CourseContentBarClosed from "./CourseContentBarClosed";
import styles from "./Home.module.css";
import styles1 from "./FrameComponent5.module.css";
import styles2 from "./FrameComponent4.module.css";
import styles3 from "./FrameComponent3.module.css";
// import styles4 from "./FrameComponent2.module.css";
import styles5 from "./HeaderText.module.css";
import styles6 from "./CourseContentBarClosed.module.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ReactPlayer from "react-player";
import ReviewCourse from "../Review/ReviewCourse";
import AllReviewsForCourse from "../Review/AllReviewsForCourse";
import GetInstructorInfo from "../Instructor/GetInstructorInfo";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { baseURL } from "../../../basic";

const Mycoursewatch = () => {
  const BoxStyle = {
    position: "absolute",
    top: "30%",
    left: "50%",
    transform: "translate(-50%, -30%)",
    width: 1000,
    height: 600,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 8,
  };
  const stylePDF = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 900,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const [singleCourse, setSingleCourse] = useState([]);
  const [courseId, setCourseId] = useState("");
  const [reviewCourseId, setReviewCourseId] = useState("");
  const [name, setName] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [programmingLanguage, setProgrammingLanguage] = useState("");
  const [level, setLevel] = useState("");
  const [language, setLanguage] = useState("");
  const [overview, setOverview] = useState("");
  const [description, setDescription] = useState("");
  const [requirement, setRequirement] = useState("");
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [deadline, setDeadline] = useState("");
  const [courseImg, setCourseImg] = useState("");
  const [allContent, setAllContent] = useState([]);
  const [contentLength, setContentLength] = useState(0);
  const [allContentVideoLength, setAllContnetVideoLength] = useState(0);
  const [categoryName, setCategoryName] = useState("");
  const [instructorName, setInstructorName] = useState("");
  const [instructorImg, setInstructorImg] = useState("");
  const [videoLink, setVideoLink] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [fileName, setFileName] = useState("");

  const handleOpenFile = () => setOpenHandleFile(true);
  const [openHandleFile, setOpenHandleFile] = React.useState(false);
  const handleCloseFile = () => setOpenHandleFile(false);

  const handleOpen = (data) => {
    setOpen(true);
    setVideoLink(data.videoLink);
    setThumbnail(data.thumbnail);
  };
  const handleOpenFiles = (data) => {
    setOpenHandleFile(true);
    setFileName(data);
  };
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);

  const navigate = useNavigate();

  useEffect(() => {
    getSingleCourse();
    const id = localStorage.getItem("userboughtsinglecourse");
    setReviewCourseId(id);
  }, []);

  const getSingleCourse = async () => {
    try {
      const accessToken = JSON.parse(
        localStorage.getItem("accessTokenOfUser") || ""
      );
      if (!accessToken) {
        throw new Error("Access token is missing.");
      }
      const id = localStorage.getItem("userboughtsinglecourse");

      //   setCourseId(courseid);
      //   console.log(courseid);
      let result = await axios
        .get(`${baseURL}/course/user/${id}`, {
          headers: {
            "ngrok-skip-browser-warning": "true",
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "multipart/form-data",
          },
        })

        .then((result) => {
          console.log(result);
          console.log(result.data.data);
          console.log(id);
          setCourseId(id);
          if (result) {
            setSingleCourse(result.data.data);
            setCourseId(result.data.data._id);
            setReviewCourseId(result.data.data._id);
            // localStorage.setItem("reviewCourse", result.data.data._id);
            setCourseImg(result.data.data.courseImg);
            setName(result.data.data.name);
            setCategoryName(result.data.data.category._id);
            setInstructorName(result.data.data.instructor.name);
            setInstructorImg(result.data.data.instructor.profileImg);
            setSubCategory(result.data.data.subCategory._id);
            setProgrammingLanguage(result.data.data.programmingLanguage._id);
            setLanguage(result.data.data.language._id);
            setLevel(result.data.data.level);
            setDescription(result.data.data.description);
            setOverview(result.data.data.overview);
            setRequirement(result.data.data.requirement);
            setPrice(result.data.data.price);
            setDiscount(result.data.data.discount);
            setDeadline(result.data.data.deadline);
            setAllContent(result.data.data.content);
            setContentLength(result.data.data.content[0].length);
            setAllContnetVideoLength(result.data.data.content[0].length);
            console.log(result.data.data.content);
            console.log(allContent);
          }
        })
        .catch((err) => {
          console.log(err.response);
          console.log(accessToken);
          console.log(id);
        });
    } catch (error) {
      console.error("Error during signup:", error);
    }
  };

  return (
    <div className={styles.home}>
      <Header />
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
          {/* <HeaderText /> */}
          <div className={styles5.headerText}>
            <div className={styles5.tag}>
              <div className={styles5.bg} />
              <div className={styles5.mostSubscribed}>Most Subscribed</div>
            </div>
            <div className={styles5.subTextParent}>
              <h1 className={styles5.subText}>{singleCourse.name}</h1>
              <div className={styles5.courseName}>{singleCourse.overview}</div>
              <div className={styles5.highlights}>
                {/* <img
            className={styles5.iconFilledStar}
            loading="lazy"
            alt=""
            src="/icon--filled--star.svg"
          /> */}
                {/* <b className={styles5.b}>4.5</b> */}
                {/* <div className={styles5.reviewsWrapper}>
                  <div className={styles5.reviews}>
                    (<span className={styles5.reviews1}>2,540 Reviews</span>)
                  </div>
                </div> */}
                <div className={styles5.highlightsInner}>
                  <div className={styles5.frameChild} />
                </div>
                <div className={styles5.publishedByParent}>
                  <div className={styles5.publishedBy}>Published By</div>
                  <div className={styles5.joeNatoli}>{instructorName}</div>
                  <div className={styles5.iconFilledCheck}>
                    <div className={styles5.boundParent}>
                      <div className={styles5.bound} />
                      <div className={styles5.color} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles5.bottunOutlinedWithIconParent}></div>
            {/* <img className={styles5.dotsIcon} loading="lazy" alt="" src="/dots.svg" /> */}
          </div>
          {/* <Video /> */}
        </div>
      </section>
      <CourseMetrics />
      <FrameComponent6 />

      {/* <FrameComponent5 />  About Course*/}
      <section className={styles1.homeInner} id="about-course">
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
                <div className={styles1.textBox}>{singleCourse.overview}</div>
              </div>
              <div className={styles1.textBoxParent}>
                <div className={styles1.textBox1}>
                  {singleCourse.description}
                </div>
                <div className={styles1.bulletPoint}>
                  <div className={styles1.iconOutlinedBullet}>
                    <div className={styles1.bgParent}>
                      <div className={styles1.bg} />
                      <div className={styles1.color} />
                    </div>
                  </div>
                  <div className={styles1.applyUxStrategies}>
                    {singleCourse.description}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles1.featuresParent}>
            <div className={styles1.features}>
              <div className={styles1.features1}>
                <Card sx={{ width: 385, height: 420 }}>
                  <CardMedia
                    sx={{ height: 200 }}
                    image={singleCourse.courseImg}
                    title={singleCourse.name}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      component="div"
                      style={{ fontWeight: "bold", fontSize: "15px" }}
                    >
                      {singleCourse.name}
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
                        Price :Rs.{singleCourse.price}
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="h6"
                        component="div"
                        style={{ fontWeight: "bold", fontSize: "15px" }}
                      >
                        discount : {singleCourse.discount}%
                      </Typography>
                    </Box>
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="div"
                      style={{ fontWeight: "bold", fontSize: "15px" }}
                    >
                      Level : {singleCourse.level}
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="div"
                      style={{ fontWeight: "bold", fontSize: "15px" }}
                    >
                      {/* language : {singleCourse.language.name} */}
                    </Typography>
                    <Box
                      gap="5px"
                      marginTop="5px"
                      display="flex"
                      justifyContent="start"
                      alignItems="center"
                    >
                      <Avatar
                        alt={instructorName}
                        src={`http://localhost:5000/uploads/${instructorImg}`}
                      />
                      <Typography
                        gutterBottom
                        component="div"
                        style={{ fontWeight: "bold", fontSize: "15px" }}
                      >
                        {instructorName}
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
                        //   paymentHandler();
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
                        Enrolled
                      </Button>
                    </CardActions>
                  </Box>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <FrameComponent4 />  Course Content*/}
      <section className={styles2.homeInner} id="course-content">
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
                <div className={styles2.lessons}>{contentLength} Lessons</div>
                <div className={styles2.iconOutlinedBullet}>
                  <div className={styles2.bgParent}>
                    <div className={styles2.bg} />
                    <div className={styles2.color} />
                  </div>
                </div>
                <div className={styles2.videos}>
                  {allContentVideoLength} Videos
                </div>
                {/* <div className={styles2.h32mComplition}>
                  125 Mins Complition Time
                </div> */}
              </div>
              <b className={styles2.expandAllLessons}>Expand All Lessons</b>
            </div>
            <div className={styles2.courseContentBarClosedParent}>
              <Modal
                open={open}
                // onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={BoxStyle}>
                  <Box sx={{ m: 2 }}>
                    <Typography variant="h5" align="left ">
                      Chapter Name : {thumbnail}
                    </Typography>
                    <IconButton
                      style={{ position: "absolute", top: "0", right: "0" }}
                      onClick={handleClose}
                    >
                      <CloseIcon />
                    </IconButton>
                    <Box
                      sx={{
                        marginTop: "5px",
                      }}
                    >
                      <ReactPlayer
                        url={videoLink}
                        height="420px"
                        width="500"
                        controls="true"
                      ></ReactPlayer>
                    </Box>
                  </Box>
                </Box>
              </Modal>
              {allContent.map((ele, i) => {
                return ele.map((e) => {
                  return (
                    <div className={styles6.courseContentBarClosed}>
                      <div className={styles6.bg} />

                      <div className={styles6.definitionPlanningFor}>
                        {/* {e.chapterDetailes.chapterName} */}
                        <div fullWidth>
                          <Accordion defaultExpanded fullWidth>
                            <AccordionSummary
                              fullWidth
                              expandIcon={<ExpandMoreIcon />}
                            >
                              <Typography
                                className={styles6.definitionPlanningFor}
                              >
                                {/* An Important Question */}
                                {e.chapterDetailes.chapterName}
                              </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                              <Typography
                                onClick={() =>
                                  handleOpen(e.contentVideoDetailes)
                                }
                                style={{
                                  cursor: "pointer",
                                }}
                              >
                                <PlayCircleFilledIcon
                                  style={{
                                    marginRight: "15px",
                                    fontSize: "20px",
                                  }}
                                />
                                {e.contentVideoDetailes.thumbnail}{" "}
                              </Typography>
                              <Typography
                                style={{
                                  marginTop: "8px",
                                  cursor: "pointer",
                                }}
                                onClick={() =>
                                  handleOpenFiles(e.contentFileDetailes.name)
                                }
                              >
                                <FileOpenIcon
                                  style={{
                                    marginRight: "15px",
                                    fontSize: "20px",
                                  }}
                                />
                                {e.contentFileDetailes.name}
                              </Typography>
                            </AccordionDetails>
                          </Accordion>
                        </div>
                      </div>
                      <Modal
                        open={openHandleFile}
                        // onClose={handleCloseFile}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                        // onClick={handleOpenFile}
                      >
                        <Box sx={stylePDF}>
                          <div>
                            <IconButton
                              style={{
                                position: "absolute",
                                top: "1",
                                right: "0",
                              }}
                              onClick={handleCloseFile}
                            >
                              <CloseIcon />
                            </IconButton>
                            <div
                              style={{
                                border: "1px solid rgba(0, 0, 0, 0.3)",
                                height: "600px",
                                width: "1000px",
                              }}
                            >
                              <iframe
                                src={`${baseURL}/uploads/${fileName}`}
                                width="800"
                                height="600"
                              />
                            </div>
                          </div>
                        </Box>
                      </Modal>

                      {/* <div className={styles6.sections30}> */}
                      {/* <Button
                        onClick={() => handleOpen(e.contentVideoDetailes)}
                      >
                        Watch
                      </Button> */}
                      {/* </div> */}
                    </div>
                  );
                });
              })}
            </div>
          </div>
        </div>
      </section>

      {/* <FrameComponent3 />  About Instructor*/}
      <section className={styles3.heading01Wrapper} id="about-publisher">
        <div className={styles3.heading01}>
          <div className={styles3.subHeading}>
            <div className={styles3.lineWrapper}>
              <div className={styles3.line} />
            </div>
            <b className={styles3.aboutPublisher}>About Publisher</b>
          </div>
        </div>
      </section>
      {/* <FrameComponent2 />  All Info about Instructor*/}

      <GetInstructorInfo
        instructorName={instructorName}
        instructorImg={instructorImg}
      />

      {/* Add Review */}
      <section className={styles3.heading01Wrapper} id="add-review">
        <div className={styles3.heading01}>
          <div className={styles3.subHeading}>
            <div className={styles3.lineWrapper}>
              <div className={styles3.line} />
            </div>
            <b className={styles3.aboutPublisher}>Reviews</b>
          </div>
        </div>
      </section>

      <ReviewCourse courseId={courseId} />

      {/* Review By Others */}
      <section className={styles3.heading01Wrapper} id="course-review">
        <div className={styles3.heading01}>
          <div className={styles3.subHeading}>
            <div className={styles3.lineWrapper}>
              <div className={styles3.line} />
            </div>
            <b className={styles3.aboutPublisher}>Reviews By Others</b>
          </div>
        </div>
      </section>
      <AllReviewsForCourse reviewCourseId={reviewCourseId} />
      <footer className={styles.footer}>
        <Section1 />
        <Section />
      </footer>
    </div>
  );
};

export default Mycoursewatch;
