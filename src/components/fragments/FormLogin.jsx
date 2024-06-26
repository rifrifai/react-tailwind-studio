/* eslint-disable react/jsx-no-undef */
import InputForm from "../elements/input/Index";
import Button from "../elements/button/Button";
import { useRef } from "react";

export default function FormLogin() {
  const handleLogin = (e) => {
    e.preventDefault();

    localStorage.setItem("email", event.target.email.value);
    localStorage.setItem("password", event.target.password.value);
    // untuk meng console data login
    // console.info(event.target.email.value);
    // console.info(event.target.password.value);
    window.location.href = "/products";
  };

  const emailRef = useRef(null);

  return (
    <>
      <form onSubmit={handleLogin}>
        <InputForm
          label="Email"
          type="email"
          placeholder="example@mail.com"
          name="email"
          ref={emailRef}
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
