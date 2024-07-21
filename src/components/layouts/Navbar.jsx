import { useLogin } from "../../hooks/useLogin";

const Navbar = () => {
  const username = useLogin();
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <>
      <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10 mx-auto">
        {username}
        <button
          onClick={handleLogout}
          className="bg-black ml-5 h-10 px-6 font-semibold rounded-md"
        >
          Logout
        </button>
      </div>
    </>
  );
};

export default Navbar;
