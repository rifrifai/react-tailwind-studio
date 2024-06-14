/* eslint-disable react/prop-types */

const Button = ({ text, classname = "bg-black" }) => {
  return (
    <>
      <button
        className={`h-10 px-6  font-semibolb rounded-md ${classname} text-white`}
        type="button"
      >
        {text}
      </button>
    </>
  );
};

export default Button;
