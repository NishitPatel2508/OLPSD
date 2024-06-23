import React, { useEffect, useState } from "react";
import styles4 from "../singlecourse/FrameComponent2.module.css";
import { FaStar } from "react-icons/fa";
import { TextField } from "@mui/material";
import axios from "axios";
import moment from "moment";
import { baseURL } from "../../../basic";

const AllReviewsForCourse = ({ reviewCourseId }) => {
  useEffect(() => {
    getAllReviewForCourse();
  }, [reviewCourseId]);
  const [reviewDate, setReviewDate] = useState("");
  const [allReview, setAllReview] = useState([]);

  const getAllReviewForCourse = async () => {
    // const id = courseId;
    // console.log(id);
    const accessToken = JSON.parse(
      localStorage.getItem("accessTokenOfUser") || ""
    );
    if (!accessToken) {
      throw new Error("Access token is missing.");
    }
    let result = await axios
      .get(`${baseURL}/review/getAll/${reviewCourseId}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "ngrok-skip-browser-warning": "true",
          "Content-Type": "application/json",
        },
      })
      .then((result) => {
        console.log(result);
        console.log(result.data);
        setAllReview(result.data.data);
        setReviewDate(
          moment(result.data.data.createdAt).format("MMMM Do YYYY")
        );
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
  return (
    <section className={styles4.allreview}>
      {/* {allReview.length == 0 && (
        <div className={styles4.reviewForAll}>
          <div className={styles4.reviewInnerForNoReview}>
            <div className={styles4.reviewInnerForAll}></div>No Reviews
          </div>
        </div>
      )} */}
      {allReview.map((ele) => {
        return (
          <div className={styles4.reviewForAll}>
            <div className={styles4.reviewInner}>
              <div className={styles4.reviewInnerForAll}>
                <label className={styles4.rate}>Ratings :</label>
                {[...Array(5)].map((star, index) => {
                  const currentRating = ele.rate;
                  return (
                    <div>
                      <label>
                        <input
                          type="radio"
                          name="rating"
                          value={ele.rate}
                          //   onChange={() => setRating(currentRating)}
                        />
                        <FaStar
                          //   className={styles4.star}
                          size={20}
                          color={
                            currentRating >= index + 1 ? "#ffc107" : "#eeee"
                          }
                        />
                      </label>
                    </div>
                  );
                })}
              </div>
              <div className={styles4.rateInner}>
                <label className={styles4.rate}>
                  Rate By : {ele.userDetails.name}
                </label>
              </div>
              <div className={styles4.rateInner}>
                <label className={styles4.rate}>Rate Date : {reviewDate}</label>
              </div>
              <div className={styles4.writeReviewInner}>
                <div className={styles4.reviewField}>
                  <TextField
                    id="outlined-multiline-static"
                    label="Review"
                    placeholder="Write a Review"
                    multiline
                    fullWidth
                    maxRows={4}
                    InputProps={{
                      readOnly: true,
                    }}
                    value={ele.experience}
                    // onChange={handleReview}
                    // sx={{
                    //   marginLeft: "15px",
                    // }}
                  />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default AllReviewsForCourse;
