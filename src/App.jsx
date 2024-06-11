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
      <div className="flex justify-center bg-blue-600 min-h-screen items-center">
        <Button color={"bg-red-600"} text={"Login"} />
        <Button color={"bg-purple-600"} text={"Logout"} />
        <Button color={"bg-gray-600"} text={"Register"} />
        <Button />
      </div>
    </>
  );
}

export default App;
