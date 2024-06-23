import { Button } from "@mui/material";
import styles5 from "./HeaderText.module.css";

const HeaderText = () => {
  return (
    <div className={styles5.headerText}>
      <div className={styles5.tag}>
        <div className={styles5.bg} />
        <div className={styles5.mostSubscribed}>Most Subscribed</div>
      </div>
      <div className={styles5.subTextParent}>
        <h1
          className={styles5.subText}
        >{`UX & Web Design Master Course: Strategy, Design, Development`}</h1>
        <div className={styles5.courseName}>
          Learn how to apply User Experience (UX) principles to your website
          designs, code a variety of sites, and increase sales!
        </div>
        <div className={styles5.highlights}>
          {/* <img
            className={styles5.iconFilledStar}
            loading="lazy"
            alt=""
            src="/icon--filled--star.svg"
          /> */}
          <b className={styles5.b}>4.5</b>
          <div className={styles5.reviewsWrapper}>
            <div className={styles5.reviews}>
              (<span className={styles5.reviews1}>2,540 Reviews</span>)
            </div>
          </div>
          <div className={styles5.highlightsInner}>
            <div className={styles5.frameChild} />
          </div>
          <div className={styles5.publishedByParent}>
            <div className={styles5.publishedBy}>Published By</div>
            <div className={styles5.joeNatoli}>Joe Natoli</div>
            <div className={styles5.iconFilledCheck}>
              <div className={styles5.boundParent}>
                <div className={styles5.bound} />
                <div className={styles5.color} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles5.bottunOutlinedWithIconParent}>
        <Button
          className={styles5.bottunOutlinedWithIcon}
          // startIcon={
          //   // <img width="24px" height="24px" src="/icon--outlined--heart.svg" />
          // }
          disableElevation={true}
          variant="outlined"
          sx={{
            textTransform: "none",
            color: "#fff",
            fontSize: "14",
            borderColor: "#fff",
            borderRadius: "4px",
            "&:hover": { borderColor: "#fff" },
            width: 123,
          }}
        >
          Wishlist
        </Button>
        <button className={styles5.bottonFilled}>
          <div className={styles5.buttonBg}>
            <div className={styles5.bg1} />
          </div>
          <div className={styles5.buyNow}>Buy Now</div>
        </button>
      </div>
      {/* <img className={styles5.dotsIcon} loading="lazy" alt="" src="/dots.svg" /> */}
    </div>
  );
};

export default HeaderText;
