import { useInputReducer } from "../../reducers/input.reducer";
import InputChild from "./InputChild";

function Input() {
  let [state, dispatch] = useInputReducer();
  return (
    <>
      <InputChild dispatch={dispatch} state={state} name="username" />
      <InputChild dispatch={dispatch} state={state} name="password" />
      <InputChild dispatch={dispatch} state={state} name="mobile" />
      <InputChild dispatch={dispatch} state={state} name="email" />
    </>
  );
}

export default Input;
