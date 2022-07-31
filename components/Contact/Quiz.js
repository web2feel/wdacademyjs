import React, { useState, useEffect } from "react";
import styles from "./Quiz.module.css";
function Quiz({ setResult, result }) {
  let answerKey = 231;
  const [key, setKey] = useState([0, 0, 0]);
  const [visibility, setVisibility] = useState(false);

  const handleKeyOne = (e) => {
    setKey((prev) =>
      prev.map((item, i) => (i === 0 ? Number(e.target.value) : item))
    );
  };
  const handleKeyTwo = (e) => {
    setKey((prev) =>
      prev.map((item, i) => (i === 1 ? Number(e.target.value) : item))
    );
  };
  const handleKeyThree = (e) => {
    setKey((prev) =>
      prev.map((item, i) => (i === 2 ? Number(e.target.value) : item))
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let answer = Number(key.join(""));
    setResult(answerKey === answer);
    setVisibility(answerKey !== answer);
  };
  useEffect(() => {
    if (visibility) {
      setTimeout(() => {
        setVisibility(false);
      }, 2000);
    }
  }, [visibility]);

  return (
    <>
      <p className='text-xl my-2 mb-8'>
        Please complete this quick JavaScript quiz before proceeding to join the
        course.
      </p>
      <form onSubmit={handleSubmit} className='w-full'>
        <div className='bg-white p-6 rounded mb-3'>
          <h3 className='text-lg mb-3 font-bold'>
            1. Which among the following is NOT a Logical Operator ?
          </h3>
          <div className='flex flex-col md:flex-row  gap-6'>
            <div>
              <input
                onChange={handleKeyOne}
                type='radio'
                id={0}
                name='q1'
                className='mr-3'
                value={1}
              />
              <label htmlFor='q1'>&&</label>
            </div>

            <div>
              <input
                onChange={handleKeyOne}
                type='radio'
                id={1}
                name='q1'
                className='mr-3'
                value={2}
              />
              <label htmlFor='q1'>++</label>
            </div>

            <div>
              <input
                onChange={handleKeyOne}
                type='radio'
                id={2}
                name='q1'
                className='mr-3'
                value={3}
              />
              <label htmlFor='q1'>||</label>
            </div>
          </div>
        </div>
        <div className='bg-white p-6 rounded mb-3'>
          <h3 className='text-lg mb-3 font-bold'>
            2. Which Array property returns the number of elements in an array ?
          </h3>
          <div className='flex flex-col md:flex-row  gap-6'>
            <div>
              <input
                onChange={handleKeyTwo}
                type='radio'
                id={0}
                name='q2'
                className='mr-3'
                value={1}
              />
              <label htmlFor='q2'>array.numbers</label>
            </div>

            <div>
              <input
                onChange={handleKeyTwo}
                type='radio'
                id={1}
                name='q2'
                className='mr-3'
                value={2}
              />
              <label htmlFor='q2'>array.count</label>
            </div>

            <div>
              <input
                onChange={handleKeyTwo}
                type='radio'
                id={2}
                name='q2'
                className='mr-3'
                value={3}
              />
              <label htmlFor='q2'>array.length</label>
            </div>
          </div>
        </div>
        <div className='bg-white p-6 rounded mb-3'>
          <h3 className='text-lg mb-3 font-bold'>
            3. Which variable does NOT have Block Scope ?
          </h3>
          <div className='flex flex-col md:flex-row  gap-6'>
            <div>
              <input
                onChange={handleKeyThree}
                type='radio'
                id={0}
                name='q3'
                className='mr-3'
                value={1}
              />
              <label htmlFor='q3'>Var</label>
            </div>

            <div>
              <input
                onChange={handleKeyThree}
                type='radio'
                id={1}
                name='q3'
                className='mr-3'
                value={2}
              />
              <label htmlFor='q3'>Let</label>
            </div>

            <div>
              <input
                onChange={handleKeyThree}
                type='radio'
                id={2}
                name='q3'
                className='mr-3'
                value={3}
              />
              <label htmlFor='q3'>Const</label>
            </div>
          </div>
        </div>
        <div className='flex items-center gap-4'>
          {           
            visibility && (
              <p
                className={`bg-red-100 flex-1 px-4 py-2 rounded text-red-500 text-center`}>
                {" "}
                Please try again{" "}
              </p>
            )
          }
          <button className='ml-auto px-6 py-2 rounded bg-green-600 text-white'>
            Submit
          </button>
        </div>
      </form>
    </>
  );
}

export default Quiz;
