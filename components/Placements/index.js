import React from "react";
import Section from "../Blocks/Section";
import Slider from "./Slider";

function Placements() {
  return (
    <div id='placements' className='py-8 sm:py-20 border-t bg-sky-500'>
      <Section>
        <div className='w-full'>
          <p className='text-center font-nunito text-3xl md:text-5xl font-bold text-white  '>
            Students secured Placements 
          </p>
        </div>
        <Slider />
      </Section>
    </div>
  );
}

export default Placements;
