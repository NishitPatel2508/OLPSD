import React from "react";
import ReactDOM from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import "./index.css";
import "./FrontendComponents/global.css";
import "./FrontendComponents/Courses/singlecourse/global.css";
import "./FrontendComponents/Aboutus/global.css";
import "./FrontendComponents/Contactus/global.css";
import "./Components/User/Test/global.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/User/Home";
import Login from "./Components/User/Login/Login";
import ForgotPassword from "./Components/User/ForgotPassword/ForgotPassword";
import NewPassword from "./Components/User/NewPassword/NewPassword";
import DesignFile from "./FrontendComponents/DesignFile";
import AllCourses from "./FrontendComponents/Courses/AllCourses";
import Singlecourse from "./FrontendComponents/Courses/singlecourse/Singlecourse";
import Mycourse from "./FrontendComponents/Courses/singlecourse/Mycourse";
import SignupPage from "./Components/User/Test/SignupPage";
import Mycoursewatch from "./FrontendComponents/Courses/singlecourse/Mycoursewatch";
import AboutUs from "./FrontendComponents/Aboutus/AboutUs";
import ContactUs from "./FrontendComponents/Contactus/ContactUs";
import { Provider } from "react-redux";
import { Store } from "./Store/Store";
import { AuthProvider } from "./stores/auth";
import Logout from "./Components/User/Logout";

const root = ReactDOM.createRoot(document.getElementById("root"));
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route inedx path="/" element={<DesignFile />}></Route>
        <Route inedx path="/signup" element={<SignupPage />}></Route>
        <Route inedx path="/login" element={<Login />}></Route>
        <Route inedx path="/logout" element={<Logout />}></Route>
        <Route inedx path="/allcourses" element={<AllCourses />}></Route>
        <Route inedx path="/singlecourse" element={<Singlecourse />}></Route>
        <Route inedx path="/mycourse" element={<Mycourse />}></Route>
        <Route inedx path="/mycourses" element={<Mycoursewatch />}></Route>
        <Route
          inedx
          path="/forgotpassword"
          element={<ForgotPassword />}
        ></Route>
        <Route inedx path="/newpassword" element={<NewPassword />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/aboutus" element={<AboutUs />}></Route>
        <Route path="/contactus" element={<ContactUs />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
root.render(
  // <Auth0Provider
  //   domain="dev-ezsvpho4v1or0de1.us.auth0.com"
  //   clientId="dv75V2xhmhyiI1xraYkSztNUAdhPjV9z"
  //   authorizationParams={{
  //     redirect_uri: window.location.origin,
  //   }}
  // >
  <AuthProvider>
    <App />
  </AuthProvider>
  // </Auth0Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
