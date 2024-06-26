import axios from "axios";

export const getProducts = () => {
  axios
    .get("https://fakestoreapi.com/products")
    .then((res) => {
      console.info(res);
    })
    .catch((err) => {
      console.info(err);
    });
};
