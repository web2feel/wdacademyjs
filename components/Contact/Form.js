import Alerts from "./Alerts";
const CustomForm = ({ status, message, onValidated }) => {
  let email, name, phone, experience;

  const submit = () => {
    email &&
      name &&
      phone &&
      email.value.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email.value,
        NAME: name.value,
        MMERGE3: phone.value,
        "group[105742]": experience.value,
      });
  };

  return (
    <div>
      <Alerts message={message} status={status} />

      <div className='grid sm:grid-cols-2 gap-x-8 gap-y-6 mt-6'>
        <p>
          <input
            className='w-full rounded-full border-sky-100 h-14 px-4'
            type='email'
            required
            placeholder='Your Email'
            ref={(node) => (email = node)}
            value={status === "success" ? "" : undefined}
          />
        </p>
        <p>
          <input
            className='w-full rounded-full border-sky-100 h-14 px-4'
            type='text'
            required
            placeholder='Your Name'
            ref={(node) => (name = node)}
            value={status === "success" ? "" : undefined}
          />
        </p>
        <p>
          <input
            className='w-full rounded-full border-sky-100 h-14 px-4'
            placeholder='Phone number'
            type='text'
            required
            ref={(node) => (phone = node)}
            value={status === "success" ? "" : undefined}
          />
        </p>
        <div>
          <select
            defaultValue={"Your Coding Experience"}
            className='w-full rounded-full border-sky-100 h-14 px-4 text-gray-500'
            name='group[105742]'
            ref={(node) => (experience = node)}>
            <option value='Your Coding Experience' disabled>
              Your Coding Experience
            </option>
            <option value='1'>Beginner</option>
            <option value='2'>Junior level</option>
            <option value='4'>Senior level</option>
          </select>
        </div>
      </div>

      <button
        className='bg-sky-500 hover:bg-sky-600 transform-gpu duration-300 h-14 rounded-full px-16 mt-6 text-white'
        onClick={submit}>
        Signup
      </button>
    </div>
  );
};

export default CustomForm;
