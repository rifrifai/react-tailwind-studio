import { useEffect, useState, useRef } from "react";
import CardProduct from "../components/fragments/CardProduct";
// import Counter from "../components/fragments/Counter";

const products = [
  {
    id: 1,
    name: "New Nike Air 1",
    price: 1000000,
    image: "/images/shoes-1.jpg",
    description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia quae ad voluptatem maiores nobis esse, dolore animi rerum temporibus excepturi. Ipsa accusamus harum facilis quos ex consequatur sequi quasi ad?`,
  },

  {
    id: 2,
    name: "Adidas Black Current",
    price: 3990000,
    image: "/images/shoes-2.jpg",
    description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa accusamus harum facilis quos ex consequatur sequi quasi ad?`,
  },
  {
    id: 3,
    name: "Black Mamba Puma",
    price: 2499000,
    image: "/images/shoes-3.jpg",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae obcaecati expedita minus adipisci cumque quaerat fuga, dolorem aliquam quia nulla. Quos quaerat labore natus, enim quae maxime dolore distinctio unde.`,
  },
];

// penggunaan useState akan langung di render/ tampilkan
//  kalau useRef datanya disimpan tapi tampilannya tidk berubah

const email = localStorage.getItem("email");
export default function ProductsPage() {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    // parsing data cart dari local storage
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  // penggunaan useEffect terhadap total harga
  useEffect(() => {
    if (cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        return acc + product.price * item.qty;
      }, 0);
      setTotalPrice(sum);
      // penyimpanan data cart ke local storage
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };

  const handleAddToCart = (id) => {
    // cara menambahkan qty
    if (cart.find((item) => item.id === id)) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([...cart, { id, qty: 1 }]);
    }
  };

  // useRef
  const cartRef = useRef(JSON.parse(localStorage.getItem("cart")) || []);

  const handleAddToCartRef = (id) => {
    cartRef.current = [...cartRef.current, { id, qty: 1 }];
    localStorage.setItem("cart", JSON.stringify(cartRef.current));
  };

  return (
    <>
      <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
        {email}
        <button
          onClick={handleLogout}
          className="bg-black ml-5 h-10 px-6 font-semibold rounded-md"
        >
          Logout
        </button>
      </div>
      <div className="flex justify-center py-5">
        {/* ... nested component */}

        {/* rendering list  */}
        <div className="w-3/4 flex flex-wrap">
          {" "}
          {products.map((product) => (
            <CardProduct key={product.id}>
              <CardProduct.Header image={product.image} />
              <CardProduct.Body name={product.name}>
                {product.description}
              </CardProduct.Body>
              <CardProduct.Footer
                price={product.price}
                id={product.id}
                handleAddToCart={handleAddToCart}
              />
            </CardProduct>
          ))}
        </div>
        <div className="w-1/4">
          <h1 className="text-3xl font-bold text-blue-600 ml-5 mb-2">Cart</h1>
          {/* <ul>
            {cart.map((item) => (
              <li key={item}>
                {item.id} - {item.qty}
              </li>
            ))}
          </ul> */}
          <table className="text-left table-auto border-separate border-spacing-x-5 ">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => {
                const product = products.find(
                  (product) => product.id === item.id
                );
                return (
                  <tr key={item.id}>
                    <td>{product.name}</td>
                    <td>
                      Rp.{" "}
                      {product.price.toLocaleString("id-ID", {
                        styles: "currency",
                        currency: "IDR",
                      })}
                    </td>
                    <td>{item.qty}</td>
                    <td>
                      Rp.{" "}
                      {(item.qty * product.price).toLocaleString("id-ID", {
                        styles: "currency",
                        currency: "IDR",
                      })}
                    </td>
                  </tr>
                );
              })}
              <tr>
                <td colSpan={3}>
                  <b>Amount</b>
                </td>
                <td>
                  <b>
                    Rp.{" "}
                    {totalPrice.toLocaleString("id-ID", {
                      styles: "currency",
                      currency: "IDR",
                    })}
                  </b>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* <div className="my-5 flex justify-center">
        <Counter />
      </div> */}
    </>
  );
}

// {/* nested component */}
//         {/* <CardProduct>
//           <CardProduct.Header image="/images/shoes-1.jpg" />
//           <CardProduct.Body title="New Nike Air 1">
//             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia quae
//             ad voluptatem maiores nobis esse, dolore animi rerum temporibus
//             excepturi. Ipsa accusamus harum facilis quos ex consequatur sequi
//             quasi ad?
//           </CardProduct.Body>
//           <CardProduct.Footer price="Rp. 1.000.000" />
//         </CardProduct> */}
