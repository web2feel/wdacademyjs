import React,{useState} from 'react'
import styles from "./Accordion.module.css";
function AccordionItem({index,item}) {
    const [open, setOpen] = useState(0)
    const handleOpen = (i) => {
      setOpen(i)
    }
  return (
    <div className='mb-2'>
    <h2
        onClick= {() => handleOpen(index)}
      className={`px-6 py-4 cursor-pointer bg-white rounded-tl rounded-tr text-xl font-bold text-sky-700 flex justify-between`}>

      {item.title}

      <span> {
        open ? 
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
<path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
</svg>
        :
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
<path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
</svg>
        } </span>
    </h2>
    <div
      className={`px-6 bg-sky-50 rounded-bl rounded-br accord-body ${styles.accordBody} ${ open === index ? styles.open : ""}`}>
      <div className='py-6' dangerouslySetInnerHTML={{__html: item.body}} />
    </div>
  </div>
  )
}

export default AccordionItem