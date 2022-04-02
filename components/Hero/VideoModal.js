import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import ReactPlayer from "react-player";
function VideoModal({ showModal, closeModal, id }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  const handleClose = (e) => {
    e.preventDefault();
    closeModal();
  };

  const modalBox = showModal ? (
    <div className='h-screen w-full bg-black bg-opacity-90 backdrop-filter backdrop-blur fixed inset-0 z-40 grid place-content-center'>
      <button
        className='h-12 w-12 bg-red-500 absolute right-3 top-3 rounded-full text-white text-sm z-50 flex justify-center items-center'
        onClick={handleClose}>
        <svg
          className='h-6 w-6'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={3}
            d='M6 18L18 6M6 6l12 12'
          />
        </svg>
      </button>
      <div className='player-wrapper bg-black p-2'>
        <ReactPlayer
          className= 'aspect-w-16 aspect-h-9'
          url='https://www.youtube.com/watch?v=sdyaprjgU3E'
          controls={true}
          playing={true}
          width='80vw'
          //height='80vh'
        />
      </div>
    </div>
  ) : null;

  if (mounted) {
    return ReactDOM.createPortal(
      modalBox,
      document.getElementById("video_modal")
    );
  } else {
    return null;
  }
}

export default VideoModal;
