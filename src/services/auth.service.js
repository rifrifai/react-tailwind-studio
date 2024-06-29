import axios from "axios";

export const login = (data, callback) => {
  axios
    .post("https://fakestoreapi.com/auth/login", data)
    .then((res) => {
      callback(res.token);
    })
    .catch((error) => {
      callback(error);
    });
};
