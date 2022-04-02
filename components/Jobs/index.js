import Section from "../Blocks/Section";
import SectionTitle from "../Blocks/SectionTitle";
import Slider from "./Slider";
function Jobs() {
  return (
    <div id='opportunities' className='py-6 sm:py-20'>
      <Section>
        <div
          data-scroll
          data-scroll-speed='1'
          id='jobs_header'
          className='flex flex-col sm:flex-row items-center justify-between mb-8 gap-x-6'>
          <div className='w-full sm:w-1/3 '>
            <SectionTitle>
              You could <br /> become
            </SectionTitle>
          </div>
          <div className='w-full sm:w-2/3'>
            <p>
            This journey could lead you to more career paths than just a frontend developer. As you can see here, we have a lot more possibility in this field. According to <a className='text-sky-500 font-bold' target='_blank' rel='noreferrer' href="https://www.interviewbit.com/blog/front-end-developer-salary/"> PayScale </a>, the average front end developer salary in India is around ₹487,700 per year (₹40,600 each month). The average salary can go up to a maximum of ₹1,200,000 per year and come down to as low as ₹260,000 per annum depending on the skills and the experience.
            </p>
          </div>
        </div>

        <Slider />
      </Section>
    </div>
  );
}

export default Jobs;
