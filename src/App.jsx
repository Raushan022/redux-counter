import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  decrementBy,
  increment,
  incrementBy,
  reset,
} from "./redux/counterSlice";

function App() {
  const countValue = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const [amount, setAmount] = useState(0);

  const IncrementHandler = () => {
    dispatch(increment());
  };

  const decrementHandler = () => {
    dispatch(decrement());
  };

  const resetHandler = () => {
    dispatch(reset());
  };

  const incrementByHandler = (value) => {
    dispatch(incrementBy(value));
  };

  const decrementByHandler = (value) => {
    dispatch(decrementBy(value));
  };

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>{countValue}</h1>

      <div className="card">
        <button className="margin-right" onClick={IncrementHandler}>
          Increment
        </button>
        <button className="margin-right" onClick={decrementHandler}>
          Decrement
        </button>
        <button className="margin-right" onClick={resetHandler}>
          Reset
        </button>

        <input
          type="number"
          placeholder="Enter Amount"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        />

        <button
          className="margin-right"
          onClick={() => incrementByHandler(amount)}
        >
          Increment By
        </button>
        <button
          className="margin-right"
          onClick={() => decrementByHandler(amount)}
        >
          Decrement By
        </button>
      </div>
    </>
  );
}

export default App;
