import Image from "next/image";
import jinson from "./assets/jinson.jpg";
import pradeep from "./assets/pradeep.jpg";
function TutorCard({ name, title, children,profile }) {
  let pic
  switch (profile) {  
    case "jinson":  
      pic = jinson
      break;
    case "pradeep":
      pic = pradeep
      break;
  }
  return (
    <div className='flex flex-col sm:w-1/2 justify-start items-center my-8 sm:my-12'>
      <div className='profile relative h-24 w-24 overflow-hidden rounded-full mb-6'>
        <Image layout='fill' objectFit='cover' src={pic} alt='profile' />
      </div>
      <h2 className='text-2xl font-bold text-gray-800'>
        {name}
      </h2>
      <p className='font-bold text-sky-700 mb-6'>
        {title}
      </p>
      <div className='text-center w-4/5'>
        {children}
      </div>
    </div>
  );
}

export default TutorCard;
