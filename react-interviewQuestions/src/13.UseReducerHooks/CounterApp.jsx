//✅ Example: Counter App using useReducer
//? 🧠 Short Interview Explanation

// “useReducer is used when the state logic becomes complex or when multiple state transitions depend on different actions.
// For example, in this counter app, instead of multiple useState calls, I use one reducer function to manage all actions like increment, decrement, and reset in a predictable and maintainable way.”

import { useReducer } from "react";

// 1️⃣ Define initial state
const initialState = { count: 0 };

// 2️⃣ Define reducer function
function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "RESET":
      return { count: 0 };
    default:
      return state;
  }
}

const CounterApp = () => {
  // 3️⃣ useReducer returns [state, dispatch]

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Counter using useReducer</h1>
      <h2>{state.count}</h2>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button
        onClick={() => dispatch({ type: "DECREMENT" })}
        disabled={state.count === 0}
        style={{ margin: "0 10px" }}
      >
        Decrement
      </button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </div>
  );
};

export default CounterApp;
