// import { Button } from "@mui/material";
import styles from "./FrameComponent6.module.css";
import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
import { useState } from "react";
import { Button, Navbar, Nav } from "react-bootstrap";

const FrameComponent6 = () => {
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    setOpenNavigation(!openNavigation);
    if (!openNavigation) {
      // disablePageScroll();
    } else {
      // enablePageScroll();
    }
  };

  const handleClick = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      // enablePageScroll();
    }
  };
  const navigation = [
    {
      id: "0",
      title: "About Course",
      url: "#about-course",
    },
    {
      id: "1",
      title: "Course Content",
      url: "#course-content",
    },
    {
      id: "2",
      title: "About Publisher",
      url: "#about-publisher",
    },
    {
      id: "3",
      title: "Course Reviews",
      url: "#course-review",
    },
  ];

  return (
    <>
      <div
        style={{
          padding: "15px 400px",
        }}
      >
        <Navbar
        // className={`border-b border-n-6 ${openNavigation ? "bg-light" : ""}`}
        // sticky="top"
        // style={{ position: "fixed" }}
        >
          <Navbar.Brand href="#hero">
            {/* <img src={brainwave} width={190} height={40} alt="Brainwave" /> */}
          </Navbar.Brand>
          <Nav className="mr-auto">
            {navigation.map((item) => (
              <Nav.Link
                key={item.id}
                href={item.url}
                onClick={handleClick}
                style={{ color: "black" }}
                // className={`${item.url === pathname.hash ? "active" : ""}`}
              >
                {item.title}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar>
      </div>
    </>
  );
  // return (
  //   <>
  //     <section className={styles.secondaryNavBarWrapper}>
  //       <div className={styles.secondaryNavBar}>
  //         <div className={styles.bg} />
  //         <div className={styles.secondaryNavBarChild} />
  //         <Button
  //           className={styles.bottunOutlined}
  //           disableElevation={true}
  //           variant="outlined"
  //           sx={{
  //             textTransform: "none",
  //             color: "#ff469f",
  //             fontSize: "14",
  //             borderColor: "#ff469f",
  //             borderRadius: "4px",
  //             "&:hover": { borderColor: "#ff469f" },
  //             width: 176,
  //             height: 40,
  //           }}
  //         >
  //           Watch Demo
  //         </Button>
  //         <button className={styles.bottonFilled}>
  //           <div className={styles.buttonBg}>
  //             <div className={styles.bg1} />
  //           </div>
  //           <div className={styles.buyNow}>Buy Now</div>
  //         </button>
  //         <div className={styles.secondaryNavBarMenuAct}>
  //           <div className={styles.bound} />
  //           <div className={styles.aboutCourseWrapper}>
  //             <b className={styles.aboutCourse}>About Course</b>
  //           </div>
  //           <div className={styles.line} />
  //         </div>
  //         <div className={styles.secondaryNavBarMenuDef}>
  //           <div className={styles.bound1} />
  //           <div className={styles.line1} />
  //           <div className={styles.courseContent}>Course Content</div>
  //         </div>
  //         <div className={styles.secondaryNavBarMenuDef3}>
  //           <div className={styles.bound4} />
  //           <div className={styles.line4} />
  //           <div className={styles.aboutPublisher}>About Publisher</div>
  //         </div>
  //       </div>
  //     </section>
  //   </>
  // );
};
export default FrameComponent6;
