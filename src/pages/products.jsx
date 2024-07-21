/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import CardProduct from "../components/fragments/CardProduct";
import { getProducts } from "../services/product.service";
import { useLogin } from "../hooks/useLogin";
import TableCart from "../components/fragments/TableCart";
import Navbar from "../components/layouts/Navbar";
// import Counter from "../components/fragments/Counter";

// const products = [
//   {
//     id: 1,
//     name: "New Nike Air 1",
//     price: 1000000,
//     image: "/images/shoes-1.jpg",
//     description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia quae ad voluptatem maiores nobis esse, dolore animi rerum temporibus excepturi. Ipsa accusamus harum facilis quos ex consequatur sequi quasi ad?`,
//   },

//   {
//     id: 2,
//     name: "Adidas Black Current",
//     price: 3990000,
//     image: "/images/shoes-2.jpg",
//     description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa accusamus harum facilis quos ex consequatur sequi quasi ad?`,
//   },
//   {
//     id: 3,
//     name: "Black Mamba Puma",
//     price: 2499000,
//     image: "/images/shoes-3.jpg",
//     description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae obcaecati expedita minus adipisci cumque quaerat fuga, dolorem aliquam quia nulla. Quos quaerat labore natus, enim quae maxime dolore distinctio unde.`,
//   },
// ];

// penggunaan useState akan langung di render/ tampilkan
//  kalau useRef datanya disimpan tapi tampilannya tidk berubah

export default function ProductsPage() {
  // const [cart, setCart] = useState([]);
  // const [totalPrice, setTotalPrice] = useState(0);
  const [products, setProducts] = useState([]);
  useLogin();

  // useEffect(() => {
  //   // parsing data cart dari local storage
  //   setCart(JSON.parse(localStorage.getItem("cart")) || []);
  // }, []);

  // memanggil products api
  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  }, []);

  // const handleAddToCart = (id) => {
  //   // cara menambahkan qty
  //   if (cart.find((item) => item.id === id)) {
  //     setCart(
  //       cart.map((item) =>
  //         item.id === id ? { ...item, qty: item.qty + 1 } : item
  //       )
  //     );
  //   } else {
  //     setCart([...cart, { id, qty: 1 }]);
  //   }
  // };

  // useRef
  // berfungsi untuk menyimpan data tetapi dan tampilannya tidak berubah
  // const cartRef = useRef(JSON.parse(localStorage.getItem("cart")) || []);

  // const handleAddToCartRef = (id) => {
  //   cartRef.current = [...cartRef.current, { id, qty: 1 }];
  //   localStorage.setItem("cart", JSON.stringify(cartRef.current));
  // };

  return (
    <>
      <Navbar />
      <div className="flex justify-center py-5">
        {/* ... nested component */}

        {/* rendering list  */}
        <div className="w-4/6 flex flex-wrap">
          {" "}
          {products.length > 0 &&
            products.map((product) => (
              <CardProduct key={product.id}>
                <CardProduct.Header image={product.image} id={product.id} />
                <CardProduct.Body name={product.title}>
                  {product.description}
                </CardProduct.Body>
                <CardProduct.Footer
                  price={product.price}
                  id={product.id}
                  // handleAddToCart={handleAddToCart}
                />
              </CardProduct>
            ))}
        </div>
        <div className="w-2/6">
          <h1 className="text-3xl font-bold text-blue-600 ml-5 mb-2">Cart</h1>
          <TableCart products={products} />
          {/* <ul>
            {cart.map((item) => (
              <li key={item}>
                {item.id} - {item.qty}
              </li>
            ))}
          </ul> */}
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
