/* eslint-disable react/jsx-no-undef */
import InputForm from "../elements/input/Index";
import Button from "../elements/button/Button";

export default function FormRegister() {
  return (
    <>
      <form action="">
        <InputForm
          label="Fullname"
          type="text"
          placeholder="Insert you name here ..."
          name="fullname"
        />
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
        <InputForm
          label="Confirm Password"
          type="password"
          placeholder="********"
          name="confirmPassword"
        />
        <Button text="Register" />
      </form>
    </>
  );
}
