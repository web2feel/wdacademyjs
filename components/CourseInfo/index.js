import Section from "../Blocks/Section";
import SectionTitle from "../Blocks/SectionTitle";
// import { projectData } from "./data";
// import Image from "next/image";
import Accordion from "./Accordion";

function Projects() {
  return (
    <div id='course_details' className='py-8 sm:py-20 bg-sky-100'>
      <Section>
        <div className='flex-col flex sm:flex-row justify-between'>
          <div className='w-full sm:w-1/3'>
            <SectionTitle>
              Course <br /> Details
            </SectionTitle>
            <p className="w-4/5 mb-6">
            React JS is the most popular JavaScript front-end development library out there now. Developers around the world use ReactJS for building data-driven interfaces, interactive components, and single-page or complex web applications. Learning this amazing library greatly improves your career prospects and opens up a whole lot of opportunities for you. 
            </p>{" "}
            <p className="w-4/5 mb-6">
            We designed this course to start from the very basics of ReactJS and progress through building an interactive application. We shall cover all major concepts in React through this learning/development process. By the end of the course, you will be confident enough to build a React JS application from the ground up. 
            </p>
          </div>
          <div className='w-full sm:w-2/3 '>
            <h3 className="mb-6 text-2xl font-bold animate-bounce text-sky-600 text-center">Learn through this Project based ReactJS Course </h3>
            <Accordion />
          </div>
        </div>
      </Section>
    </div>
  );
}

export default Projects;
