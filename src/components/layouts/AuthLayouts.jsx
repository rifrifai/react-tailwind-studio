/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
export default function AuthLayouts({ children, title, login, register }) {
  return (
    <>
      <div className="flex justify-center min-h-screen items-center">
        <div className="w-full max-w-xs">
          <h1 className="text-3xl font-bold mb-2 text-blue-600">{title}</h1>
          <p className="font-medium text-slate-500 mb-8">
            Welcome, Please enter your details!
          </p>
          {children}
          <p className="text-sm mt-3 text-center">
            {login ? "Don't have an account? " : "Already have an account? "}

            {login && (
              <Link to="/register" className="font-bold text-blue-600">
                {login ? "Sign Up" : "Login"}
              </Link>
            )}

            {register && (
              <Link to="/login" className="font-bold text-blue-600">
                {register ? "Login" : "Sign Up"}
              </Link>
            )}
          </p>
        </div>
      </div>
    </>
  );
}

{
  /* <Navigation login="login" register="register" /> */
}
// dibawah ini masih pusing butuh mentor!
// function Navigation({ login, register }) {
//   if (login) {
//     return (
//       <>
//         <p className="text-sm mt-3 text-center">
//           Don't have an account? {""}
//           <Link to="/register" className="font-bold text-blue-600">
//             Sign Up
//           </Link>
//         </p>
//       </>
//     );
//   }
//   if (register) {
//     return (
//       <>
//         <p className="text-sm mt-3 text-center">
//           Already have an account? {""}
//           <Link to="/login" className="font-bold text-blue-600">
//             Login
//           </Link>
//         </p>
//       </>
//     );
//   }
// }
