import { useContext } from "react";
import { SmoothScrollContext } from "../../context/LocoScroll.context";
const CourseTab = ({ course, active, setActive, children }) => {
  const { scroll } = useContext(SmoothScrollContext);

  const handleClick = () => {
    setActive(course.title.toLowerCase());

  };

  return (
    <div
      onClick={handleClick}
      className={`course_tab bg-sky-100 w-min sm:w-1/3 p-3 sm:p-6 rounded-lg hover:bg-sky-500 cursor-pointer flex  gap-3 items-center hover:text-white transform-gpu duration-300 ${
        active === course.title.toLowerCase() &&
        `bg-sky-500 text-white shadow-lg`
      }`}>
      <div className='w-12 sm:w-20'>{children}</div>
      <div>
        <h3 className='text-2xl font-bold'>{course.title}</h3>
        <div className="w-48 ">
          <span>{` ${course.days} Modules | `}</span>
          <span> {` ${course.projects} ${course.projects > 1 ? "Projects" : "Project"} `} </span>
        </div>
      </div>
    </div>
  );
};

export default CourseTab;
