import React, { useReducer } from "react";

type CounterType = {
  count: number;
};

type IncreDecreAction = {
  type: 'increment' | 'decrement'
  payload: number
}

type resetAction = {
  type: 'reset'
}

type finalAction = IncreDecreAction | resetAction

const initialState = {
  count: 0
}

function reducer(state: CounterType, action: finalAction) {
  if (action.type === "increment") {
    return { count: state.count + action.payload };
  }
  if (action.type === "decrement") {
    return { count: state.count - action.payload };
  }
  if(action.type==='reset'){
    return initialState;
  }
  return state;
}

export const UserReducerDemo = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      Count: {state.count}
      <div>
        <button onClick={() => dispatch({ type: "increment", payload: 1 })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: "decrement", payload: 1 })}>
          Decrement
        </button>
        <button onClick={()=>dispatch({type: 'reset'})}>
            Reset
        </button>
      </div>
    </div>
  );
};
