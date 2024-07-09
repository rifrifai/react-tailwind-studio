/* eslint-disable no-unused-vars */
import { useLogin } from "../hooks/useLogin";

export const ProfilePage = () => {
  const username = useLogin();
  return (
    <>
      <h1>Profile</h1>
    </>
  );
};
