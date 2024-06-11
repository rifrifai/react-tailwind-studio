/* eslint-disable react/prop-types */

const Button = ({ color = "bg-blue-600", text = "default" }) => {
  return (
    <>
      <button
        className={`h-10 px-6  font-semibold rounded ${color} text-white w-full`}
        type="submit"
      >
        {text}
      </button>
    </>
  );
};

export default Button;
