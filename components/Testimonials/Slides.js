import Gravatar from "react-gravatar";
import md5 from "md5";
function Slides({ data }) {
  let hashed = md5(data.email);
  return (
    <div className='flex flex-col sm:flex-row  w-full justify-between items-start gap-8'>
      <div className='w-full sm:w-1/4 flex items-center justify-center'>
        <Gravatar md5={hashed} size={100} className='rounded-full' />
      </div>
      <div className='w-full sm:w-3/4 text-white'>
        <svg
          className='text-white fill-current mb-6'
          width='24'
          height='24'
          viewBox='0 0 24 24'>
          <path d='M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z' />
        </svg>
        <div className='mb-8' dangerouslySetInnerHTML={{__html:data.message}}/>
        <h3 className='text-xl'>{data.name}</h3>
        <p className="text-sm">{data.title}  {` - ${data.place}`}</p>
      </div>
    </div>
  );
}

export default Slides;
