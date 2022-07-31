import Section from "../Blocks/Section";
import SectionTitle from "../Blocks/SectionTitle";
//import Subscribe from "./Subscribe";
import { useState } from "react";
import Quiz from "./Quiz";
function Contact() {
  const [result, setResult] = useState(null);
  return (
    <div id='join_now' className='py-8 sm:py-20 bg-sky-100'>
      <Section>
        <div className='flex-col flex sm:flex-row justify-between'>
          <div className='w-full sm:w-1/3'>
            <SectionTitle>
              Join <br /> Now
            </SectionTitle>
          </div>
          <div className='w-full flex-col sm:w-2/3'>
            <div className='flex flex-col justify-center items-start'>
              <h3 className='text-3xl text-gray-800'>
                Take your first step here 
              </h3>

              {/* <p className=' text-sm animate-bounce my-2 bg-yellow-100 px-4 py-2 border border-yellow-400 rounded-xl font-bold text-yellow-800'>
                  Timing: 9:30PM - 10:30PM IST
              </p> */}

              {result ? (
                <>
                <p className="text-xl my-2">Thank you for completing the quiz successfuly.</p>
                <a
                  href='https://pages.razorpay.com/reactrecipe'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='bg-sky-500 hover:bg-sky-600 transform-gpu duration-300 rounded-full py-3 px-12 mt-6 text-white font-bold text-lg'>
                  Join Now
                </a></>
              ) : (
                <Quiz setResult={setResult} result={result} />
              )}
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}

export default Contact;
