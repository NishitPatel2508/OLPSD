import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { Button, TextField } from "@mui/material";
import styles4 from "../singlecourse/FrameComponent2.module.css";
import axios from "axios";
import { baseURL } from "../../../basic";

const ReviewCourse = ({ courseId }) => {
  const [rating, setRating] = useState(null);
  const [ratingError, setRatingError] = useState(null);
  const [hover, setHover] = useState(null);
  const [review, setReview] = useState(null);
  const [reviewError, setReviewError] = useState(null);
  const handleReview = (e) => {
    console.log(courseId);
    console.log(rating);
    setReview(e.target.value);
  };
  const handleSubmitReview = async () => {
    // e.preventDefault();
    const accessToken = JSON.parse(
      localStorage.getItem("accessTokenOfUser") || ""
    );
    console.log(accessToken);
    if (!accessToken) {
      throw new Error("Access token is missing.");
    }
    //   const id = localStorage.getItem("usercourseid");
    // if (!rating) {
    //   setRatingError("Please give rate the course");
    // }
    // if (!review) {
    //   setReviewError("Please write review about the course");
    // }
    const fields = {
      course: courseId,
      rate: rating,
      experience: review,
    };
    if (review) {
      const result = await axios
        .post(`${baseURL}/review/create`, fields, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            //   "Content-Type": "multipart/form-data",
          },
        })
        .then((result) => {
          console.log(rating);
          console.log(review);

          console.log(result);
          console.log(result.data);
          setRating(null);
          setHover(null);
          setReview(null);
          // setReview("");
        })
        .catch((err) => {
          console.log(err.response);
        });
    }
  };
  return (
    <section className={styles4.review}>
      <div className={styles4.reviewInner}>
        <div className={styles4.rateInner}>
          <label className={styles4.rate}>Ratings :</label>
          {[...Array(5)].map((star, index) => {
            const currentRating = index + 1;
            return (
              <div>
                <label>
                  <input
                    type="radio"
                    name="rating"
                    value={currentRating}
                    onClick={() => setRating(currentRating)}
                  />
                  <FaStar
                    className={styles4.star}
                    size={20}
                    color={
                      currentRating <= (hover || rating) ? "#ffc107" : "#e4e5e9"
                    }
                    onMouseEnter={() => setHover(currentRating)}
                    onMouseLeave={() => setHover(null)}
                  />
                </label>
              </div>
            );
          })}
        </div>
        <div className={styles4.writeReviewInner}>
          <div className={styles4.reviewField}>
            <TextField
              id="outlined-multiline-static"
              label="Add Your Review"
              placeholder="Write a Review"
              multiline
              fullWidth
              rows={4}
              onChange={handleReview}
              // sx={{
              //   marginLeft: "15px",
              // }}
            />
            {reviewError && <label>{reviewError}</label>}
          </div>
          <Button
            variant="contained"
            sx={{ marginTop: "20px" }}
            onClick={handleSubmitReview}
          >
            SUBMIT
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ReviewCourse;
