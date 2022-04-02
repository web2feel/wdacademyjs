import react from "./assets/react.svg";
import javascript from "./assets/javascript.svg";
import angular from "./assets/angular.svg";
import vue from "./assets/vue.svg";
import frontend from "./assets/frontend.svg";
import Image from "next/image";
function Slide({ data }) {
  let icon
  switch (data.icon) {
    case "react":
      icon = react;
      break;
    case "javascript":
      icon = javascript;
      break;
    case "angular":
      icon = angular;
      break;
    case "vue":
      icon = vue;
      break;
    case "frontend":
      icon = frontend;
      break;

  }
  return (
    <div className='bg-white h-full p-8 border rounded-md hover:shadow-lg transform-gpu duration-300'>
      <Image src={icon} width={96} height={96} alt='icon' />
      <h3 className='text-3xl my-4 text-gray-800'>{data.title}</h3>
      <p className='text-sm my-4'>You must know</p>
      <div className='bg-sky-100 rounded px-4 py-2 flex gap-3 text-xs uppercase'>
        {data.languages.map((item) => (
          <span key={item}> {item} </span>
        ))}
        css
      </div>
      <div>
        <p className='my-6 text-sm text-gray-700 leading-relaxed'>
          {data.description}
        </p>
      </div>
    </div>
  );
}

export default Slide;
