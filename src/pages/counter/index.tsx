import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  counterActions,
  counterSelector,
} from "../../redux/counter/counterSlice";
const Counter: React.FC = () => {
  const { count } = useSelector(counterSelector);
  console.log(count);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => dispatch(counterActions.increment())}>
        Increase
      </button>
      <button onClick={() => dispatch(counterActions.decrement())}>
        Decrease
      </button>
      <button onClick={() => dispatch(counterActions.setCount(5))}>Set </button>
    </div>
  );
};
export default Counter;
