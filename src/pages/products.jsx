import CardProduct from "../components/fragments/CardProduct";
import Counter from "../components/fragments/Counter";

const products = [
  {
    id: 1,
    name: "New Nike Air 1",
    price: "Rp. 1.000.000",
    image: "/images/shoes-1.jpg",
    description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia quae ad voluptatem maiores nobis esse, dolore animi rerum temporibus excepturi. Ipsa accusamus harum facilis quos ex consequatur sequi quasi ad?`,
  },

  {
    id: 2,
    name: "Adidas Black Current",
    price: "Rp. 3.999.000",
    image: "/images/shoes-2.jpg",
    description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa accusamus harum facilis quos ex consequatur sequi quasi ad?`,
  },
  {
    id: 3,
    name: "Black Mamba Puma",
    price: "Rp. 2.499.000",
    image: "/images/shoes-3.jpg",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae obcaecati expedita minus adipisci cumque quaerat fuga, dolorem aliquam quia nulla. Quos quaerat labore natus, enim quae maxime dolore distinctio unde.`,
  },
];

const email = localStorage.getItem("email");
export default function ProductsPage() {
  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };

  return (
    <>
      <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
        {email}
        <button
          onClick={handleLogout}
          className="bg-black ml-5 h-10 px-6 font-semibold rounded-md"
        >
          Login
        </button>
      </div>
      <div className="flex justify-center py-5">
        {/* nested component */}
        {/* <CardProduct>
          <CardProduct.Header image="/images/shoes-1.jpg" />
          <CardProduct.Body title="New Nike Air 1">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia quae
            ad voluptatem maiores nobis esse, dolore animi rerum temporibus
            excepturi. Ipsa accusamus harum facilis quos ex consequatur sequi
            quasi ad?
          </CardProduct.Body>
          <CardProduct.Footer price="Rp. 1.000.000" />
        </CardProduct> */}

        {/* rendering list  */}
        {products.map((product) => (
          <CardProduct key={product.id}>
            <CardProduct.Header image={product.image} />
            <CardProduct.Body name={product.name}>
              {product.description}
            </CardProduct.Body>
            <CardProduct.Footer price={product.price} />
          </CardProduct>
        ))}
      </div>
      <div className="flex justify-center w-100">
        <Counter />
      </div>
    </>
  );
}
