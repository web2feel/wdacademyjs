import SectionTitle from "../Blocks/SectionTitle";
import Section from "../Blocks/Section";
import TutorCard from "./TutorCard";

function Tutors() {
  return (
    <div id='about' className='overflow-hidden py-8 sm:py-20 bg-white'>
      <Section>
        <div
          id='about_content'
          className='flex flex-col items-center sm:flex-row '>
          <div
            data-scroll
            data-scroll-speed='-1'
            className='tutTitle w-full sm:w-1/3 mb-8'>
            <SectionTitle>
              About <br /> Us
            </SectionTitle>
            <p className='sm:w-4/5'>
            We are passionate about teaching and we believe in the teaching style of of breaking down complex concepts into simple comprehensive units.  We are working professionals. If you like to learn more about our career journey, please read our profile cards.
            </p>
          </div>

          <div
            className='w-full sm:w-2/3 flex flex-col sm:flex-row gap-x-8  bg-sky-100 rounded-tl-3xl rounded-bl-3xl relative'>
            <div className='absolute inset-y-0 left-full w-screen bg-sky-100'>
              {" "}
            </div>
              <TutorCard name="Pradeep K.S" title="Senior Frontend Developer" profile="pradeep">
                <ul>
                 <li>7+ years of web-dev experience.</li>
                 <li>Proficient in HTML, CSS and JavaScript.</li>
                 <li>Remarkable teaching skills.</li>
                 <li>Web tech Youtuber</li>
                </ul>
              </TutorCard>
              <TutorCard name="Jinson Abraham" title="Senior Frontend Developer" profile="jinson"> 
                <ul>
                  <li>10+ years of web-dev experience.</li>
                  <li>Experienced in HTML,CSS,JS and ReactJS.</li>
                  <li>Loves to teach. </li>
                  <li>Web tech Youtuber.</li>
                </ul>


              
              </TutorCard>
          </div>
        </div>
      </Section>
    </div>
  );
}

export default Tutors;
