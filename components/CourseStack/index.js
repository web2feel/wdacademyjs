import CourseInfo from "./CourseInfo";
import Section from "../Blocks/Section";
import SectionTitle from "../Blocks/SectionTitle";
import Image from "next/image";
import pic from "./assets/coursebg.jpg";

function CourseStack() {
  return (
    <div id='projects' className='border-t border-b pb-8 sm:pb-20 relative bg-white'>
      <Image
        src={pic}
        layout='fill'
        alt='courses'
        objectFit='cover'
        className='top-0 z-0 opacity-50'
      />

      <div
        data-scroll
        className='bg-white pt-6 sm:pt-20  relative bg-gradient-to-b from-white via-white bg-opacity-0'>
        <Section>
          <div
            id='stack_header'
            className='flex flex-col sm:flex-row items-center justify-between mb-6 gap-x-6  '>
            <div className='stackHead w-full sm:w-1/3'>
              <SectionTitle>
                Stack we <br /> Cover
              </SectionTitle>
            </div>
            <div className='stackDesc w-full sm:w-2/3'>
              <p>
              Consider this your first step of becoming a web development professional. Here we cover the 3 foundational languages of web development. They are HTML, CSS and JavaScript. Please refer the table below to get an idea about how this learning journey is going to be.
              </p>
            </div>
          </div>
        </Section>
      </div>
      <div id='stack_area'>
        <Section>
          <CourseInfo />
        </Section>
      </div>
    </div>
  );
}

export default CourseStack;
