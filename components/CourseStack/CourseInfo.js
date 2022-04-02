import { data } from "./data";
import { useState } from "react";
import CourseContent from "./CourseContent";
import CourseTab from "./CourseTab";
import profile from "../../assets/profile.jpg";

function CourseInfo() {
  const [css, html, javascript] = data;
  const [active, setActive] = useState("html");
  const [count, setCount] = useState({ 1: 5, 2: 5, 3: 5 });

  return (
    <div
      data-scroll
      data-scroll-speed='-1'
      className='rounded-xl p-4 sm:p-8 bg-white bg-opacity-50 shadow-xl relative z-20 backdrop-filter backdrop-blur '>
      <div
        id='course_tabs'
        className='flex  justify-between gap-4 sm:gap-8 md:overflow-hidden overflow-x-scroll'>
        <CourseTab
          badge={profile}
          course={html}
          setActive={setActive}
          active={active}>
          <svg viewBox='0 0 128 128'>
            <path
              fill='#E44D26'
              d='M19.037 113.876L9.032 1.661h109.936l-10.016 112.198-45.019 12.48z'></path>
            <path
              fill='#F16529'
              d='M64 116.8l36.378-10.086 8.559-95.878H64z'></path>
            <path
              fill='#EBEBEB'
              d='M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692 3.382 37.927H64zm0 35.743l-.061.017-15.327-4.14-.979-10.975H33.816l1.928 21.609 28.193 7.826.063-.017z'></path>
            <path
              fill='#fff'
              d='M63.952 52.455v13.763h16.947l-1.597 17.849-15.35 4.143v14.319l28.215-7.82.207-2.325 3.234-36.233.335-3.696h-3.708zm0-27.856v13.762h33.244l.276-3.092.628-6.978.329-3.692z'></path>
          </svg>
        </CourseTab>
        <CourseTab course={css} setActive={setActive} active={active}>
          <svg viewBox='0 0 128 128'>
            <path
              fill='#1572B6'
              d='M18.814 114.123L8.76 1.352h110.48l-10.064 112.754-45.243 12.543-45.119-12.526z'></path>
            <path
              fill='#33A9DC'
              d='M64.001 117.062l36.559-10.136 8.601-96.354h-45.16v106.49z'></path>
            <path
              fill='#fff'
              d='M64.001 51.429h18.302l1.264-14.163H64.001V23.435h34.682l-.332 3.711-3.4 38.114h-30.95V51.429z'></path>
            <path
              fill='#EBEBEB'
              d='M64.083 87.349l-.061.018-15.403-4.159-.985-11.031H33.752l1.937 21.717 28.331 7.863.063-.018v-14.39z'></path>
            <path
              fill='#fff'
              d='M81.127 64.675l-1.666 18.522-15.426 4.164v14.39l28.354-7.858.208-2.337 2.406-26.881H81.127z'></path>
            <path
              fill='#EBEBEB'
              d='M64.048 23.435v13.831H30.64l-.277-3.108-.63-7.012-.331-3.711h34.646zm-.047 27.996v13.831H48.792l-.277-3.108-.631-7.012-.33-3.711h16.447z'></path>
          </svg>
        </CourseTab>
        <CourseTab course={javascript} setActive={setActive} active={active}>
          <svg viewBox='0 0 128 128' fill='none'>
            <rect fill='white' />
            <path
              d='M116 7H11.5L21.25 113.75L63.75 125.5L106.25 113.75L116 7Z'
              fill='#E5A228'
            />
            <path d='M106.75 15H64.5V116L99 106.5L106.75 15Z' fill='#FFCA68' />
            <path
              d='M92 20.5L94.5 48H81L79.75 34.25H51.75L49.75 55H94.5L91 94.75L64.5 102.75L37 94.75L35.5 74.75H48.5L49.75 85.25L64.5 88.75L78.5 84.25L79.75 67.75H35.5L40 20.5H92Z'
              fill='white'
            />
          </svg>
        </CourseTab>
      </div>
      {active == "html" && (
        <CourseContent data={html} id={1} count={count} setCount={setCount} />
      )}
      {active == "css" && (
        <CourseContent data={css} id={2} count={count} setCount={setCount} />
      )}
      {active == "javascript" && (
        <CourseContent
          data={javascript}
          id={3}
          count={count}
          setCount={setCount}
        />
      )}
    </div>
  );
}

export default CourseInfo;
