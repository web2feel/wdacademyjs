import React from "react";
import { useForm, ValidationError } from "@formspree/react";
function Mail() {
  const [state, handleSubmit] = useForm("xwkjqgjj");

  if (state.succeeded) {
    return     <p className="bg-green-400 p-6 text-white text-center rounded">Thanks for your valuable input!</p>;
  }
  return (
    <div className="my-6">
      <form onSubmit={handleSubmit}>
        <p className="my-4">
          <input id='name' type='text' name='name' placeholder='Your Name' className="w-full  md:w-3/5 rounded border border-gray-400" />
          <ValidationError prefix='Name' field='name' errors={state.errors} />
        </p>

        <p className="my-4">
          <input
            id='email'
            type='email'
            name='email'
            placeholder='Your Email'
            className="w-full md:w-3/5 rounded border border-gray-400"
          />
          <ValidationError prefix='Email' field='email' errors={state.errors} />
        </p>

        <p className="my-4">
          <select name='language' id='language' className="w-full md:w-3/5 rounded border border-gray-400">
            <option value='' selected='' disabled=''>
            Which language you like to learn

            </option>
            <option value='HTML/CSS/JS'>HTML/CSS/JS</option>
            <option value='Advanced JS'>Advanced JavaScript</option>
            <option value='ReactJS'>ReactJS</option>
            <option value='NextJS'>NextJS</option>
          </select>
          <ValidationError
            prefix='Language'
            field='language'
            errors={state.errors}
          />
        </p>
        <button className="rounded-full bg-sky-500 hover:bg-sky-600 text-white font-semibold duration-300 transform-gpu py-3 px-10 text-lg " type='submit' disabled={state.submitting}>
          Submit
        </button>
      </form>
  
    </div>
  );
}

export default Mail;
