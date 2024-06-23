import { useLocation } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { useState } from "react";
import {
  Navbar,
  Nav,
  Button,
  NavDropdown,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { background, brainwave } from "../assets";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../stores/auth";

const Header = () => {
  // ------------------Auth0 ----------------------
  //Login
  // const { loginWithRedirect } = useAuth0();

  // //Logout
  // const { logout } = useAuth0();

  // //Methods
  // const { user, isAuthenticated, isLoading } = useAuth0();

  // const pathname = useLocation();

  //-------------------------------------------------------------

  //From Thapa
  const { isLoggedIn } = useAuth();

  const navigate = useNavigate();
  // const [openNavigation, setOpenNavigation] = useState(false);
  // const toggleNavigation = () => {
  //   if (openNavigation) {
  //     setOpenNavigation(false);
  //     enablePageScroll();
  //   } else {
  //     setOpenNavigation(true);
  //     disablePageScroll();
  //   }
  // };

  // const handleClick = () => {
  //   if (!openNavigation) return;

  //   enablePageScroll();
  //   setOpenNavigation(false);
  // };
  // const styleofdrodown = {
  //   .dropdown-toggle::after {
  //     display: none !important;
  //   }
  // }

  const handleSignup = () => {
    navigate("/signup");
  };
  const handleLogin = () => {
    navigate("/login");
    // loginWithRedirect();
  };
  const handleLogout = () => {
    navigate("/logout");
    // loginWithRedirect();
  };
  const handleExplore = () => {
    navigate("/allcourses");
  };
  const handleMycourse = () => {
    navigate("/mycourse");
  };
  const handleHome = () => {
    navigate("/");
    // console.log(user); // Auth 0
  };
  const handleAboutUs = () => {
    navigate("/aboutus");
  };
  return (
    <Navbar
      fixed="top"
      className={`  d-flex `}
      style={{ backgroundColor: "#101828", color: "#fff" }}
    >
      <Navbar.Brand href="#hero">
        <img
          src="/images/brainwave.svg"
          width={125}
          height={35}
          alt="Brainwave"
          className="d-inline-block aligns-center"
          style={{ color: "black", height: "35px", marginLeft: "15px" }}
        />{" "}
        {/* Brainwave */}
      </Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link
          style={{
            fontSize: "16px",
            fontWeight: "600",
            color: "#fff",
          }}
          onClick={handleHome}
        >
          Home
        </Nav.Link>
        <Nav.Link
          style={{
            fontSize: "16px",
            fontWeight: "600",
            color: "#fff",
          }}
          onClick={handleAboutUs}
        >
          Abouts Us
        </Nav.Link>
        <Nav.Link
          style={{
            fontSize: "16px",
            fontWeight: "600",
            color: "#fff",
          }}
          onClick={handleExplore}
        >
          Explore Courses
        </Nav.Link>
        <Nav.Link
          style={{
            fontSize: "16px",
            fontWeight: "600",
            color: "#fff",
          }}
          onClick={handleMycourse}
        >
          My Courses
        </Nav.Link>
      </Nav>

      <Navbar.Text style={{ fontSize: "16px", marginRight: "10px" }}>
        {/* Welcome,{user.name} */}
      </Navbar.Text>

      <DropdownButton
        variant="info"
        title="Profile"
        style={{
          fontSize: "16px",
          // color: "#7718eb",
          // backgroundColor: "#7718eb",
          border: "none",
          // display: "flex",
          // display: "none !important",
          justifyContent: "center",
          alignItems: "end",
          marginRight: "20px",
        }}
      >
        {/* onClick={() => loginWithRedirect()} */}
        {isLoggedIn ? (
          <Dropdown.Item eventKey="2" onClick={handleLogout}>
            Logout
          </Dropdown.Item>
        ) : (
          <>
            <Dropdown.Item eventKey="2" onClick={handleLogin}>
              Login
            </Dropdown.Item>
            <Dropdown.Item eventKey="1" onClick={handleSignup}>
              Sign Up
            </Dropdown.Item>
          </>
        )}
      </DropdownButton>

      {/* <Button
        variant="outline-dark"
        onClick={toggleNavigation}
        className="ml-auto d-lg-none"
      >
        <MenuSvg openNavigation={openNavigation} />
      </Button>
      <Button
        variant="outline-primary"
        onClick={handleSignup}
        className="mr-2 d-none d-lg-block"
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
        New account
      </Button>
      <Button
        variant="outline-primary"
        className="d-none d-lg-block"
        onClick={handleLogin}
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
        Profile
      </Button> */}
    </Navbar>
  );
};

export default Header;
