/* eslint-disable no-unused-vars */
import { useLogin } from "../hooks/useLogin";

export const ProfilePage = () => {
  const username = useLogin();
  return (
    <>
      <h1 className="text-3xl font-bold p-5">Profile</h1>
      username: {username}
    </>
  );
};
