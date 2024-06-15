import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <div className="flex items-center">
        <p className="mr-5">Counter</p>
        <button className="bg-black text-white p-3  rounded-md">+</button>
      </div>
    );
  }
}

export default Counter;
