/* eslint-disable react/jsx-no-undef */
import InputForm from "../elements/input/Index";
import Button from "../elements/button/Button";
import { useRef } from "react";
import { useEffect } from "react";
import { login } from "../../services/auth.service";

export default function FormLogin() {
  const handleLogin = (e) => {
    e.preventDefault();

    // localStorage.setItem("email", event.target.email.value);
    // localStorage.setItem("password", event.target.password.value);
    // untuk meng console data login
    // console.info(event.target.email.value);
    // console.info(event.target.password.value);
    // window.location.href = "/products";
    const data = {
      username: event.target.username.value,
      password: event.target.password.value,
    };
    login(data);
  };

  const usernameRef = useRef(null);
  // berfungsi untuk fokus ke email langsung tanpa diklik emailnya
  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  return (
    <>
      <form onSubmit={handleLogin}>
        <InputForm
          label="Username"
          type="text"
          placeholder="John Doe"
          name="username"
          ref={usernameRef}
        />
        <InputForm
          label="Password"
          type="password"
          placeholder="********"
          name="password"
        />
        <Button text="Login" classname="bg-blue-600 w-full" type="submit" />
      </form>
    </>
  );
}
