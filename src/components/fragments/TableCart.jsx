/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";

const TableCart = ({ products }) => {
  const cart = useSelector((state) => state.cart.data);
  const [totalPrice, setTotalPrice] = useState(0);

  // penggunaan useEffect terhadap total harga
  useEffect(() => {
    if (products.length > 0 && cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        return acc + product.price * item.qty;
      }, 0);
      setTotalPrice(sum);
      // penyimpanan data cart ke local storage
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, products]);

  const totalPriceRef = useRef(null);

  useEffect(() => {
    if (cart.length > 0) {
      totalPriceRef.current.style.display = "table-row";
    } else {
      totalPriceRef.current.style.display = "none";
    }
  }, [cart]);

  return (
    <>
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
          {products.length > 0 &&
            cart.map((item) => {
              const product = products.find(
                (product) => product.id === item.id
              );
              return (
                <tr key={item.id}>
                  <td>{product.title.substring(0, 10)}...</td>
                  <td>
                    €.{" "}
                    {product.price.toLocaleString("id-ID", {
                      styles: "currency",
                      currency: "EUR",
                    })}
                  </td>
                  <td>{item.qty}</td>
                  <td>
                    €.{" "}
                    {(item.qty * product.price).toLocaleString("id-ID", {
                      styles: "currency",
                      currency: "EUR",
                    })}
                  </td>
                </tr>
              );
            })}
          <tr ref={totalPriceRef}>
            <td colSpan={3}>
              <b>Amount</b>
            </td>
            <td>
              <b>
                €.{" "}
                {totalPrice.toLocaleString("id-ID", {
                  styles: "currency",
                  currency: "IDR",
                })}
              </b>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default TableCart;
