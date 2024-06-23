import styles6 from "./CourseContentBarClosed.module.css";
import { Button } from "@mui/material";
const CourseContentBarClosed = ({
  definitionPlanningForSucc,
  sections30Minutes,
}) => {
  return (
    <div className={styles6.courseContentBarClosed}>
      <div className={styles6.bg} />
      <div className={styles6.iconOutlinedAddWrapper}>
        <div className={styles6.iconOutlinedAdd}>
          <div className={styles6.bgParent}>
            <div className={styles6.bg1} />
            <div className={styles6.color} />
          </div>
        </div>
      </div>
      <div className={styles6.definitionPlanningFor}>
        {definitionPlanningForSucc}
      </div>

      <div className={styles6.sections30}>
        <Button>{sections30Minutes}</Button>
      </div>
    </div>
  );
};

export default CourseContentBarClosed;
