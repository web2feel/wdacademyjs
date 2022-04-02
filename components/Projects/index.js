import Section from "../Blocks/Section";
import SectionTitle from "../Blocks/SectionTitle";
import { projectData } from "./data";
import Image from "next/image";

function Projects() {
  return (
    <div id='projects' className='py-8 sm:py-20 bg-sky-100'>
      <Section>
        <div className='flex-col flex sm:flex-row justify-between'>
          <div className='w-full sm:w-1/3'>
            <SectionTitle>
              Projects <br /> list
            </SectionTitle>
            <p className="w-4/5 mb-4">
              The most obvious reason for learning JavaScript is if you have
              hopes of becoming a web developer. Even if you haven't got your
              heart set on a tech career, being proficient in this language will
              enable you to build websites from scratch—a pretty useful skill to
              have in todays job market!
            </p>{" "}
            <p className="w-4/5 mb-4">
              If you want to become a Full Stack developer, you must have a
              decent knowledge about JS. Once you know the JS, you can explore
              more on Vue js , React JS, Node JS, Mongo DB etc
            </p>
          </div>
          <div className='w-full sm:w-2/3 '>
            <div className='grid gap-4 grid-cols-6'>
              {projectData.map((data, i) => {
                let classes = [3, 4, 8, 9].includes(i)
                  ? "col-span-3 xl:col-span-3"
                  : "col-span-3 xl:col-span-2";
                return (
                  <div
                    className={`bg-white p-6 text-center rounded-lg flex flex-col items-center ${classes}`}
                    key={i}>
                    <Image
                      src={`/${data.icon}.png`}
                      alt='sd'
                      width={36}
                      height={36}
                    />
                    <h3 className=' text-lg font-bold text-gray-700 my-2'>
                      {data.name}
                    </h3>
                    <div className='flex flex-col text-sm'>
                      {data.concepts.map((item, i) => {
                        return <div key={i}>{item}</div>;
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}

export default Projects;
