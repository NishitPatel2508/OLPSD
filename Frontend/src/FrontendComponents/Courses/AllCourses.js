import React from "react";
import Header from "../Header";
import Section from "../Section";
import Section1 from "../Section1";
import styles from "../DesignFile.module.css";
import { Box, Typography, Button, Avatar } from "@mui/material";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { baseURL } from "../../basic";

// import { ToastContainer, toast } from "react-toastify";
const AllCourses = () => {
  useEffect(() => {
    getAllCourse();
  }, []);

  const [allCourse, setAllCourse] = useState([]);
  const navigate = useNavigate();
  const setDetailsToLocalStorage = (id) => {
    localStorage.setItem("usercourseid", id);
    navigate("/singlecourse");
  };

  const getAllCourse = async () => {
    try {
      // const accessToken = JSON.parse(localStorage.getItem("accessToken") || "");
      // if (!accessToken) {
      //   throw new Error("Access token is missing.");
      // }
      const result = await axios
        .get(`${baseURL}/getAllCourseforuser`, {
          headers: {
            // Authorization: `Bearer ${accessToken}`,
            "ngrok-skip-browser-warning": "true",
            "Content-Type": "application/json",
          },
        })
        .then((result) => {
          console.log(result);
          console.log(result.data.data[0]);
          console.log(allCourse, "all");
          setAllCourse(result.data.data);
        })
        .catch((err) => {
          console.log(err.response);
          // console.log(accessToken);
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
            {allCourse.map((element) => {
              return (
                <Box mt="18px">
                  <Card sx={{ width: 295 }} m="0 30px">
                    <CardMedia
                      sx={{ height: 140 }}
                      image={`${element.courseImg}`}
                      // title="green iguana"
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        component="div"
                        style={{ fontWeight: "bold", fontSize: "15px" }}
                      >
                        {`${element.name}`}
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
                          {`₹ ${element.price}`}
                        </Typography>
                        <Typography
                          gutterBottom
                          variant="h6"
                          component="div"
                          style={{ fontWeight: "bold", fontSize: "15px" }}
                        >
                          {`discount : ${element.discount}%`}
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
                          src={`${baseURL}/uploads/${element.instructor.profileImg}`}
                        />
                        <Typography
                          gutterBottom
                          component="div"
                          style={{ fontWeight: "bold", fontSize: "15px" }}
                        >
                          {`${element.instructor.name}`}
                        </Typography>
                      </Box>
                    </CardContent>
                    <CardActions>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => {
                          setDetailsToLocalStorage(element._id);
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
                        View All Details
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

export default AllCourses;
