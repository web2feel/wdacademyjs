import Section from "../Blocks/Section";
import { useState, useRef, useEffect, useContext } from "react";
import Button from "../Blocks/Button";
import HeroPic from "./assets/developer.gif";
import VideoModal from "./VideoModal";
import Image from "next/image";
import animation from "../../utils/animation";
import { GsapContext } from "../Layout";

function Hero() {
  const [showModal, setShowModal] = useState(false);
  const { tl } = useContext(GsapContext);
  let myHero = useRef(null);
  const { hero } = animation;

  useEffect(() => {
    tl.from(myHero, hero, "-=0.5");
  }, []);

  return (
    <div ref={(el) => (myHero = el)} id='home' className='bg-white'>
      <Section>
        <div className='hero-container flex items-center'>
          <div className='hero-content flex flex-col sm:flex-row gap-8'>
            <div className='w-full sm:w-7/12 flex flex-col justify-center items-start gap-8'>
              <h1
                data-scroll
                data-scroll-speed='2'
                className='text-2xl sm:text-3xl lg:text-6xl text-gray-800 font-black'>
                Kickstart your React JS <br /> Developer Career
              </h1>
              <p
                data-scroll
                data-scroll-speed='1.5'
                className='sm:text-xl text-gray-600'>
                We present you an opportunity to learn and level up your
                knowledge of React JS . Come and join us on this journey to master the most popular 
                JavaScript library for front-end development. 
              </p>
              <div data-scroll data-scroll-speed='1' className='flex gap-8'>
                <Button classes='py-3 px-10 text-lg '>
                  <a data-scroll-to href='#course_details'>
                    Course Details
                  </a>
                </Button>
                <div
                  onClick={() => setShowModal(true)}
                  className='bg-red-500 text-white rounded-full h-12 w-12 flex items-center justify-center relative cursor-pointer'>
                  <div className='bg-red-500 h-12 w-12 rounded-full absolute inset-0 animate-ping-slow opacity-60'></div>
                  <svg
                    className='h-12 w-12 fill-current absolute inset-0'
                    viewBox='0 0 20 20'
                    fill='currentColor'>
                    <path
                      fillRule='evenodd'
                      d='M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z'
                      clipRule='evenodd'
                    />
                  </svg>
                </div>
                <VideoModal
                  id='BkJN-NPIBsg'
                  showModal={showModal}
                  closeModal={() => setShowModal(false)}></VideoModal>
              </div>
            </div>
            <div className='w-full sm:w-5/12 hero-pic flex items-center order-first sm:order-last'>
              <div
                data-scroll
                data-scroll-speed='-1'
                className='w-2/3 sm:w-full h-full mx-auto relative'>
                <Image
                  src={HeroPic}
                  width={596}
                  height={549}
                  alt='webdiary_academy'
                />
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}

export default Hero;
