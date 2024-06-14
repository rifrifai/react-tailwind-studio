/* eslint-disable react/prop-types */
import Button from "../elements/button/Button";
export default function CardProduct({ children }) {
  return (
    <>
      <div className="w-full max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow mx-2 flex flex-col justify-between">
        {children}
      </div>
    </>
  );
}

function Header({ image }) {
  return (
    <>
      <a href="#">
        <img src={image} alt="shoes-1" className="p-8 rounded-t-lg" />
      </a>
    </>
  );
}

function Body({ children, name }) {
  return (
    <>
      <div className="px-5 pb-5 h-full">
        <a href="#">
          <h5 className="text-xl font-semibold tracking-tight text-white">
            {name}
          </h5>
          <p className="text-s text-white">{children}</p>
        </a>
      </div>
    </>
  );
}

function Footer({ price }) {
  return (
    <>
      <div className="flex items-center justify-between px-5 pb-5">
        <span className="text-xl font-bold text-white">{price}</span>
        <Button
          classname="bg-blue-600 rounded p-2 text-white font-medium"
          text="Add To Cart"
        />
      </div>
    </>
  );
}

// dinamakan nested component
CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;
