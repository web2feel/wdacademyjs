import Section from "../Blocks/Section";
import SectionTitle from "../Blocks/SectionTitle";
//import Subscribe from "./Subscribe";

function Contact() {
  return (
    <div id='join_now' className='py-8 sm:py-20 bg-sky-100'>
      <Section>
        <div className='flex-col flex sm:flex-row justify-between'>
          <div className='w-full sm:w-1/3'>
            <SectionTitle>
              Join <br /> Now
            </SectionTitle>
          </div>
          <div className='w-full flex sm:w-2/3 '>
            <div className='flex flex-col justify-center items-start'>
              <h3 className='text-3xl text-gray-800'>
                Take your first step here
              </h3>
              <p className='text-xl my-2'>
                Join us on this journey, for you to become a frontend developer.
              </p>
              <p className=' text-sm animate-bounce my-2 bg-yellow-100 px-4 py-2 border border-yellow-400 rounded-xl font-bold text-yellow-800'>
                {/* Classes begin on April 18, 2022 <br/> */}
                Timing: 9:30PM - 10:30PM IST
              </p>
              <a
                href='https://pages.razorpay.com/wdacademyjs'
                target='_blank'
                rel='noopener noreferrer'
                className='bg-sky-500 hover:bg-sky-600 transform-gpu duration-300 rounded-full py-3 px-12 mt-6 text-white font-bold text-lg'>
                Join Now
              </a>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}

export default Contact;
