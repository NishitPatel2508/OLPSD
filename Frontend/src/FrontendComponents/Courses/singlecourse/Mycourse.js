import React, { useEffect } from "react";
import { Box, Typography, useTheme, Button, Link, Avatar } from "@mui/material";
import HeaderText from "./HeaderText";
import CourseMetrics from "./CourseMetrics";
import Header from "../../Header";
import Section from "../../Section";
import Section1 from "../../Section1";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import styles from "./Home.module.css";

import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { baseURL } from "../../../basic";
const Mycourse = () => {
  const [myCourse, setMycourse] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    // getSingleCourse();
    getAllMyCourse();
  }, []);
  const handleSingleCourse = (id) => {
    localStorage.setItem("userboughtsinglecourse", id);
    const i = localStorage.getItem("userboughtsinglecourse");

    if (i) {
      navigate("/mycourses");
    }
  };

  const getAllMyCourse = async () => {
    try {
      const accessToken = JSON.parse(
        localStorage.getItem("accessTokenOfUser") || ""
      );
      if (!accessToken) {
        throw new Error("Access token is missing.");
      }
      const userCourse = localStorage.getItem("userbuycourse");
      console.log(accessToken);
      console.log(userCourse);

      let result = await axios
        .get(`${baseURL}/getallmycourses`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "ngrok-skip-browser-warning": "true",
            // "Content-Type": "multipart/form-data",
          },
        })
        .then((result) => {
          console.log("GOT");
          console.log(result);
          console.log(result.data.data);
          setMycourse(result.data.data);
          // toast.success(result.data.message);
        })
        .catch((err) => {
          console.log(err.response);
          console.log(accessToken);
          // console.log(result);
        });
    } catch (error) {
      console.error("Error during signup:", error);
    }
  };
  return (
    <>
      <Header />
      <Box m="20px">
        {/* HEADER */}
        <Box sx={{ mt: "65px" }}>
          <Box
            display="grid"
            gap="25px"
            gridTemplateColumns="repeat(8, minmax(0, 1fr))"
            sx={{
              "& > div": {
                gridColumn: "span 2",
              },
            }}
          >
            {myCourse.map((element) => {
              return (
                <Box mt="18px">
                  <Card sx={{ width: 295 }} m="0 30px">
                    <CardMedia
                      sx={{ height: 140 }}
                      image={`${element.course.courseImg}`}
                      title={`${element.course.name}`}
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        component="div"
                        style={{ fontWeight: "bold", fontSize: "15px" }}
                      >
                        {`${element.course.name}`}
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
                          Rs. {`${element.course.price}`}
                        </Typography>
                      </Box>
                      <Typography
                        gutterBottom
                        variant="h6"
                        component="div"
                        style={{ fontWeight: "bold", fontSize: "15px" }}
                      >
                        {`${element.course.language.languageName}`}
                      </Typography>
                      <Box
                        gap="5px"
                        marginTop="5px"
                        display="flex"
                        justifyContent="start"
                        alignItems="center"
                      >
                        <Avatar
                          alt="Remy Sharp"
                          src={`${baseURL}/uploads/${element.course.instructor.profileImg}`}
                        />
                        <Typography
                          gutterBottom
                          component="div"
                          style={{ fontWeight: "bold", fontSize: "15px" }}
                        >
                          {`${element.course.instructor.name}`}
                        </Typography>
                      </Box>
                    </CardContent>
                    <CardActions>
                      <Button
                        variant="contained"
                        fullWidth
                        color="primary"
                        onClick={() => {
                          handleSingleCourse(element.course._id);
                        }}
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
                        Let's Start the Course
                      </Button>
                    </CardActions>
                  </Card>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Box>

      <footer className={styles.footer}>
        <Section1 />
        <Section />
      </footer>
    </>
  );
};

export default Mycourse;
