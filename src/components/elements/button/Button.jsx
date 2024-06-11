/* eslint-disable react/prop-types */

const Button = ({ color = "bg-black", text = "default" }) => {
  return (
    <>
      <button
        className={`h-10 m-4 px-6 font-semibold rounded-full ${color} text-white`}
        type="submit"
      >
        {text}
      </button>
    </>
  );
};

export default Button;
