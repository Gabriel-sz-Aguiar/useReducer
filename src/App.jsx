import { useReducer } from "react";
import "./App.css";

const reducer = (state, action) => {
  switch (action.type) {
    case "Increment":
      return { ...state, count: state.count + 1 };
    case "showText":
      return { ...state, showText: !state.showText };
    case "IncrementAndShowText":
      return {
        count: state.count + 1,
        showText: !state.showText,
      };

    default:
      return "This Action doens't exist";
  }
};

function UseReducerApp() {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    showText: true,
  });

  const { count, showText } = state;
  const handleClick = () => {
    dispatch({ type: "IncrementAndShowText" });
  };

  return (
    <div className="App">
      <h1>Use Reducer</h1>
      <h3>{count}</h3>
      <button onClick={handleClick}>Clique</button>
      {showText && <p>Bem-Vindo!</p>}
    </div>
  );
}

export default UseReducerApp;
