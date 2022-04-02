function SectionTitle({ children }) {
  return (
    <div id='section_title' className='section_title mb-6 overflow-hidden'>
      <h2
        data-scroll
        data-scroll-speed='-0.5'
        className='text-3xl md:text-5xl font-bold z-20 relative pt-5 mb-6 text-gray-800'>
        {children}
      </h2>
      <span
        data-scroll
        data-scroll-speed='-5'
        data-scroll-direction='horizontal'
        className=' w-2/5 h-3 bg-gradient-to-r rounded-full from-sky-500 to-cyan-400 block z-10 relative -top-5'></span>
    </div>
  );
}

export default SectionTitle;
