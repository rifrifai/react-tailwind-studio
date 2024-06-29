import axios from "axios";

export const login = (data) => {
  axios
    .post("https://fakestoreapi.com/auth/login", data)
    .then((res) => {
      console.info(res);
    })
    .catch((error) => {
      console.info(error);
    });
};
