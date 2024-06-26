/* eslint-disable react/prop-types */
// import Button from "../elements/button/Button";
export default function CardProduct({ children }) {
  return (
    <>
      <div className="w-full my-2 max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow mx-2 flex flex-col justify-between">
        {children}
      </div>
    </>
  );
}

function Header({ image }) {
  return (
    <>
      <a href="#">
        <img
          src={image}
          alt="shoes-1"
          className="p-8 rounded-t-lg w-72 h-64 object-cover"
        />
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
            {name.substring(0, 20)} ...
          </h5>
          <p className="text-s text-white">{children.substring(0, 100)}...</p>
        </a>
      </div>
    </>
  );
}

function Footer({ price, handleAddToCart, id }) {
  return (
    <>
      <div className="flex items-center justify-between px-5 pb-5">
        <span className="text-xl font-bold text-white">
          €.{" "}
          {price.toLocaleString("id-ID", {
            styles: "currency",
            currency: "EUR",
          })}
        </span>
        <button
          className="h-10 px-6 bg-blue-600 rounded p-2 text-white font-medium"
          onClick={() => handleAddToCart(id)}
        >
          Add To Cart
        </button>
      </div>
    </>
  );
}

// dinamakan nested component
CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;
