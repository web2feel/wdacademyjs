function Alerts({ status, message }) {
  return (
    <>
      <div>
        {status === "sending" && (
          <div className='relative shadow-md rounded-xl flex bg-sky-50 p-6 text-sky-600 transform-gpu duration-300 justify-center bg-opacity-70 border-2 border-white my-4'>
            <div>
              <svg
                className='animate-spin mr-3 h-6 w-6 text-sky-600'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'>
                <circle
                  className='opacity-25'
                  cx='12'
                  cy='12'
                  r='10'
                  stroke='currentColor'
                  strokeWidth='4'></circle>
                <path
                  className='opacity-75'
                  fill='currentColor'
                  d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'></path>
              </svg>
            </div>
            <p>Processing...</p>
          </div>
        )}
        {status === "error" && (
          <div className='relative shadow-md rounded-xl flex bg-red-50 p-6 text-red-500 transform-gpu duration-300 justify-center items-center bg-opacity-70 border-2 border-white my-4'>
            <div>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6 mr-3'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
            </div>

            <div dangerouslySetInnerHTML={{ __html: message }} />
          </div>
        )}
        {status === "success" && (
          <div className='relative shadow-md rounded-xl flex bg-green-50 p-6 text-green-500 transform-gpu duration-300 justify-center items-center bg-opacity-70 border-2 border-white'>
            <div>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6 mr-3'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
            </div>
            <div dangerouslySetInnerHTML={{ __html: message }} />
          </div>
        )}
      </div>
    </>
  );
}

export default Alerts;
