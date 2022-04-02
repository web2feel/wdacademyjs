import { menuData } from "./data";
import { useMediaQuery } from "react-responsive";

function HeaderMenu({ active, setActive }) {
  const handleClick = () => {
    setActive((active) => !active);
  };

  const isLg = useMediaQuery({ query: "(min-width: 1024px)" });
  const isSm = useMediaQuery({ query: "(max-width: 1023px)" });

  return (
    <div className='mobile_men'>
      {isLg && (
        <nav className='flex items-center gap-10'>
          <ul className='flex gap-10 font-semibold'>
            {menuData?.map((item) => {
              return (
                <li
                  key={item}
                  className='cursor-pointer text-gray-700 hover:text-sky-600 transform-gpu duration-300'>
                  <a
                    data-scroll-to
                    href={`#${item.toLowerCase().replace(" ", "_")}`}>
                    {item}
                  </a>
                </li>
              );
            })}
          </ul>

          <a
            href='https://www.youtube.com/c/WebDiary'
            target='_blank'
            rel='noreferrer'>
            <button className='rounded bg-gradient-to-t   from-red-600 to-red-500 gap-2 flex px-3 py-1 text-white font-semibold transform-gpu duration-300'>
              YouTube
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='fill-current'
                width='24'
                height='24'
                viewBox='0 0 24 24'>
                <path d='M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z' />
              </svg>
            </button>
          </a>
        </nav>
      )}
      {isSm && active && (
        <>
          <nav
            onClick={handleClick}
            className='fixed h-screen w-screen bg-white z-50 inset-0 flex justify-center items-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6 absolute top-10 right-10 cursor-pointer text-red-600'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
            <ul className='text-center divide-gray-200 divide-y w-4/5'>
              {menuData?.map((item) => (
                <li
                  key={item}
                  className='cursor-pointer text-gray-500 hover:text-sky-500 text-xl py-4 transform-gpu duration-300'>
                  <a data-scroll-to href={`#${item.toLowerCase()}`}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </>
      )}
    </div>
  );
}

export default HeaderMenu;
