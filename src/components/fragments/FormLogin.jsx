/* eslint-disable react/jsx-no-undef */
import InputForm from "../elements/input/Index";
import Button from "../elements/button/Button";

export default function FormLogin() {
  const handleLogin = (e) => {
    e.preventDefault();
    // untuk meng console data login
    console.info(event.target.email.value);
    console.info(event.target.password.value);
    console.log("Login Successful");
  };

  return (
    <>
      <form onSubmit={handleLogin}>
        <InputForm
          label="Email"
          type="email"
          placeholder="example@mail.com"
          name="email"
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
