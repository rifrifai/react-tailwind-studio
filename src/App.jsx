/* eslint-disable react/prop-types */
// function Button() {
//   return (
//     <button
//       className="h-10 m-4 px-6 font-semibold rounded-full bg-yellow-600 text-white"
//       type="submit"
//     >
//       Buy now!
//     </button>
//   );
// }

// import React from "react";
// class ButtonGray extends React.Component {
//   render() {
//     return (
//       <>
//         <button
//           className="h-10 m-4 px-6 font-semibold rounded-full bg-gray-600 text-white"
//           type="submit"
//         >
//           Buy now!
//         </button>
//       </>
//     );
//   }
// }
import Button from "./components/elements/button/Button";

function App() {
  return (
    <>
      <div className="flex justify-center min-h-screen items-center">
        {/* <Button color={"bg-red-600"} text={"Login"} />
        <Button color={"bg-purple-600"} text={"Logout"} />
        <Button color={"bg-gray-600"} text={"Register"} />
        <Button /> */}
        <div className="w-full max-w-xs">
          <h1 className="text-3xl font-bold mb-2 text-blue-600">Login</h1>
          <p className="font-medium text-slate-500 mb-8">
            Welcome, Please enter your details
          </p>
          <form action="">
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-slate-700 text-sm font-bold mb-2"
              >
                Email
              </label>
              <input
                type="text"
                className="text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder:opacity-50"
                placeholder="example@gmail.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-slate-700 text-sm font-bold mb-2"
              >
                Password
              </label>
              <input
                type="password"
                className="text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder:opacity-50"
                placeholder="*****"
              />
            </div>
            <Button text="Login" />
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
