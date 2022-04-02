import { useContext } from "react";
import { SmoothScrollContext } from "../../context/LocoScroll.context";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

function CourseContent({ data, id, setCount, count }) {
  let badgebg;
  let contentbg;
  let textCol;
  switch (data.title) {
    case "CSS":
      badgebg = "bg-blue-500";
      contentbg = "bg-sky-50";
      textCol = "text-sky-800";
      break;
    case "HTML":
      badgebg = "bg-orange-500";
      contentbg = "bg-orange-50";
      textCol = "text-orange-800";
      break;
    case "JavaScript":
      badgebg = "bg-yellow-500";
      contentbg = "bg-yellow-50";
      textCol = "text-yellow-800";
      break;
    default:
      badgebg = "bg-gray-700";
      contentbg = "bg-gray-100";
  }

  const lessons = data.lessons;
  const { scroll } = useContext(SmoothScrollContext);

  const handleClick = (e) => {
    e.preventDefault();
    if (!(count[id] >= lessons.length)) {
      setCount({ ...count, [id]: (count[id] += 5) });
    }

  };

  return (
    <>
      <div className='bg-white rounded-xl mt-6 border overflow-hidden'>
        <Accordion className='divide-y divide-gray-200' preExpanded={["item0"]}>
          {data.lessons.slice(0, count[id]).map((item, i) => (
            <AccordionItem key={i} uuid={`item${i}`}>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <div className='flex gap-2 p-4 items-center'>
                    <p
                      className={`px-3 py-1 font-bold text-sm text-white ${badgebg} rounded-full min-w-max`}>
                      {" "}
                      Module - {i + 1}
                    </p>
                    <p className='px-4 font-bold text-gray-700'>
                      {" "}
                      {item.title}
                    </p>
                    {/* <p className='ml-auto text-gray-400 '>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-6 w-6'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor '>
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M19 9l-7 7-7-7'
                        />
                      </svg>
                    </p> */}
                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>
              {/* <AccordionItemPanel
                className={`bg-gray-50 py-4 px-8 border-t ${contentbg} ${textCol}`}>
                <div dangerouslySetInnerHTML={{ __html: item.description }} />
              </AccordionItemPanel> */}
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <button
        disabled={count[id] >= lessons.length}
        onClick={handleClick}
        className='bg-sky-500 hover:bg-sky-600 duration-300 rounded-full text-white font-bold px-6 py-2 mt-4 disabled:opacity-30 show_more'>
        Load More
      </button>
    </>
  );
}

export default CourseContent;
