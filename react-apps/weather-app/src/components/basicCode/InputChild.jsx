import { useInputReducer } from "../../reducers/input.reducer";

function InputChild({ dispatch, state, name }) {
  return (
    <section>
      <input
        type="text"
        name={name}
        value={state[name]}
        onChange={(e) =>
          dispatch({
            type: name,
            payload: e.target.value,
          })
        }
      />
    </section>
  );
}

export default InputChild;
