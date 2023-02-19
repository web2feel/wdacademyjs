import Section from "../Blocks/Section";
import SectionTitle from "../Blocks/SectionTitle";
import Slider from "./Slider";

function Testimonials() {
  return (
    <div id='testimonials' className='py-6 sm:py-20 border-t'>
      <Section>
        <div className='flex flex-col sm:flex-row justify-between gap-x-6'>
          <div data-scroll data-scroll-speed='1' className='w-full sm:w-1/3'>
            <SectionTitle>
              Student <br /> Testimonials
            </SectionTitle>
            <p className='w-4/5 mb-6'>
              Few testimonials from our last batch students.
            </p>
          </div>
          <div
            data-scroll
            data-scroll-speed='2'
            className='w-full sm:w-2/3 rounded-xl bg-gradient-to-tr from-sky-500 to-sky-400'>
            <Slider />
          </div>
        </div>
      </Section>

  
    </div>
  );
}

export default Testimonials;
