import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import styles from "./FrameComponent1.module.css";
import img from "./i1.png";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";

const FrameComponent1 = () => {
  return (
    <div className={styles.mainContent}>
      <img
        className={styles.mainContentChild}
        loading="lazy"
        alt=""
        src={img}
      />
      <img className={styles.mainContentItem} loading="lazy" alt="" src={img} />
      <div className={styles.getInTouch}>
        <div className={styles.getInTouchChild} />
        <div className={styles.getInTouchItem} />
        <div className={styles.contactDetails}>
          <div className={styles.contactHeader}>
            <h3 className={styles.contactUs}>CONTACT US</h3>
            <div className={styles.contactHeaderChild} />
          </div>
        </div>
        <div className={styles.formArea}>
          <div className={styles.leaveUsA}>Leave us a message</div>
          <div className={styles.formFields}>
            <div className={styles.fieldLabelsParent}>
              <div className={styles.fieldLabels}>
                {/* <div className={styles.inputFields}>
                  <div className={styles.nameField}>
                    <div className={styles.nameInput}>
                      <div className={styles.nameInputChild} />
                      <div className={styles.name}>Name</div>
                    </div>
                  </div>
                  <div className={styles.nameInputArea}>
                    <div className={styles.nameInputAreaChild} />
                    <input
                      className={styles.firstNameLastName}
                      placeholder="First_Name Last_Name"
                      type="text"
                    />
                  </div>
                </div> */}
                <TextField
                  className={styles.email}
                  placeholder="Name"
                  variant="outlined"
                  label="Name"
                  sx={{
                    "& fieldset": { borderColor: "#b4bec8" },
                    "& .MuiInputBase-root": { height: "50px" },
                    "& .MuiInputBase-input": {
                      color: "rgba(135, 135, 135, 0.8)",
                    },
                  }}
                />
                <TextField
                  className={styles.email}
                  placeholder="Email Address"
                  variant="outlined"
                  label="Email Address"
                  sx={{
                    "& fieldset": { borderColor: "#b4bec8" },
                    "& .MuiInputBase-root": { height: "50px" },
                    "& .MuiInputBase-input": {
                      color: "rgba(135, 135, 135, 0.8)",
                    },
                  }}
                />
                <textarea
                  className={styles.message}
                  placeholder="Your Message"
                  rows={7}
                  cols={21}
                />
              </div>
              <Button
                className={styles.button}
                disableElevation={true}
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#fff",
                  fontSize: "18",
                  background: "#7718eb",
                  borderRadius: "4px",
                  "&:hover": { background: "#7718ec" },
                  height: 50,
                }}
              >
                Send
              </Button>
            </div>
            <div className={styles.contactInfo}>
              <div className={styles.infoBlocksParent}>
                <div className={styles.infoBlocks}>
                  <div className={styles.infoBlockOne}>
                    <div className={styles.div}>
                      <LocationOnIcon />
                    </div>
                    <div className={styles.contactIcons}>
                      <div className={styles.div2}>
                        <CallIcon />
                      </div>
                      <div className={styles.div2}>
                        <EmailIcon />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.addressBlock}>
                  <div className={styles.weekendUxBContainer}>
                    <p className={styles.weekendUx}>
                      Brainwave Education PVT. Ltd
                    </p>
                    <p className={styles.b373Ground}>
                      B 37/3 Ground Floor Double StoryRamesh, Near Prabhat Chowk
                      Ahmedabad: 110015
                    </p>
                  </div>
                  <div className={styles.placeholder}>
                    <a
                      className={styles.a}
                      href="tel:+916355242731"
                      target="_blank"
                    >
                      <p>+91 6355242731</p>
                    </a>
                  </div>
                  <div>nishitpatel78638@gmail.com</div>
                  <div className={styles.socialIcons}>
                    <a
                      className={styles.socialIcon}
                      href="https://twitter.com/home"
                      target="_blank"
                    >
                      <XIcon />
                    </a>
                    <a
                      className={styles.socialIcon}
                      href="https://www.linkedin.com/in/nishit-patel-6650b1188/"
                      target="_blank"
                    >
                      <LinkedInIcon />
                    </a>
                    <a
                      className={styles.socialIcon}
                      href="https://www.facebook.com/profile.php?id=100009329100515"
                      target="_blank"
                    >
                      <FacebookIcon />
                    </a>
                    <a
                      className={styles.socialIcon}
                      href="https://github.com/NishitPatel2508/"
                      target="_blank"
                    >
                      <GitHubIcon />
                    </a>
                  </div>
                </div>
              </div>
              <div className={styles.map}>
                <img
                  className={styles.mapChild}
                  loading="lazy"
                  alt=""
                  src="/rectangle-19@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
