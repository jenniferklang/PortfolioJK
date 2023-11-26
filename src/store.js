/*import { createStore } from "redux";

export default createStore((state, action) => {
  if (state === undefined) {
    return 1;
  }
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    default:
      console.error("Felaktig action", action);
  }
  return state;
});

// en typisk reducer funktion.....
*/
/*
import { connect } from "react-redux";

function App(props) {
  return <input onClick={props.increment} type="button" value={props.value} />;
}
export default connect((state) => ({ value: state }), {
  increment() {
    return { type: "INCREMENT" };
  },
})(App);
*/
