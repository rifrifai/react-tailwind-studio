/* eslint-disable no-unused-vars */
import React from "react";

// dibawah ini dinamakan stateful component
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.info("constructor");
  }

  // didmount dan didupdate hanya bisa digunakan di class component atau stateful component
  // menggantikan nilai default
  componentDidMount() {
    this.setState({ count: 1 });
    console.info("componentDidMount");
  }

  // kalau tidak menggunakan kondisi maka tidak jalan
  componentDidUpdate(prevProps, prevState) {
    console.info("componentDidUpdate");
    if (this.state.count === 10) {
      this.setState({ count: 0 });
    }
  }

  render() {
    return (
      <div className="flex items-center">
        <button
          className="bg-black text-white rounded-md p-3"
          onClick={() => this.setState({ count: this.state.count - 1 })}
        >
          -
        </button>
        <p className="m-5">{this.state.count}</p>
        <button
          className="bg-black text-white p-3  rounded-md"
          onClick={() => this.setState({ count: this.state.count + 1 })}
        >
          +
        </button>
        {console.info("render")}
      </div>
    );
  }
}

export default Counter;
