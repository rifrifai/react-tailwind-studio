/* eslint-disable react/prop-types */

const Button = ({
  text,
  classname = "bg-black",
  handleLogin = () => {},
  type = "button",
}) => {
  return (
    <>
      <button
        className={`h-10 px-6  font-semibolb rounded-md ${classname} text-white`}
        type={type}
        onClick={() => {
          handleLogin();
        }}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
