import styles from "./NavigationBarWithLoging.module.css";

const NavigationBarWithLoging = () => {
  return (
    <header className={styles.navigationBarWithLoging}>
      <div className={styles.bg} />
      <div className={styles.logoWrapper}>
        <div className={styles.logo}>
          <img
            className={styles.monogram02Icon}
            loading="lazy"
            alt=""
            src="/monogram-02.svg"
          />
          <div className={styles.logoText}>
            <div className={styles.bound} />
            <img
              className={styles.growthschoolIcon}
              loading="lazy"
              alt=""
              src="/growthschool.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.searchBar}>
        <div className={styles.fieldBg}>
          <div className={styles.bg1} />
        </div>
        <div className={styles.iconOutlinedSearch}>
          <div className={styles.bg2} />
          <div className={styles.color} />
        </div>
        <div className={styles.iconOutlinedSearch1}>
          <div className={styles.bgParent}>
            <div className={styles.bg3} />
            <div className={styles.color1} />
          </div>
        </div>
        <div className={styles.serchForCourses}>Serch for courses here</div>
      </div>
      <div className={styles.linksWrapper}>
        <div className={styles.links}>
          <div className={styles.navBarMenuDefault}>
            <div className={styles.bound1} />
            <div className={styles.home}>Home</div>
          </div>
          <div className={styles.navBarMenuActive}>
            <div className={styles.bound2} />
            <b className={styles.courses}>Courses</b>
          </div>
          <div className={styles.navBarMenuDefault1}>
            <div className={styles.bound3} />
            <div className={styles.resources}>Resources</div>
          </div>
          <div className={styles.navBarMenuDefault2}>
            <div className={styles.bound4} />
            <div className={styles.support}>Support</div>
          </div>
        </div>
      </div>
      <div className={styles.iconOutlinedNotificationWrapper}>
        <div className={styles.iconOutlinedNotification}>
          <div className={styles.bgGroup}>
            <div className={styles.bg4} />
            <div className={styles.color2} />
          </div>
        </div>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.iconOutlinedCartWrapper}>
          <div className={styles.iconOutlinedCart}>
            <div className={styles.bgContainer}>
              <div className={styles.bg5} />
              <div className={styles.color3} />
            </div>
          </div>
        </div>
        <div className={styles.user}>
          <img
            className={styles.userChild}
            loading="lazy"
            alt=""
            src="/ellipse-52@2x.png"
          />
          <div className={styles.iconFilledDropdownClosWrapper}>
            <div className={styles.iconFilledDropdownClos}>
              <div className={styles.frameDiv}>
                <div className={styles.bg6} />
                <div className={styles.color4} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavigationBarWithLoging;
