import { ADD, MINUS, CounterActionTypes, CounterState } from "./types";

const initialState: CounterState = {
  counter: 0
};

export const counterReducer = (
  state: CounterState = initialState,
  action: CounterActionTypes
): CounterState => {
  switch (action.type) {
    case ADD:
      return { ...state, counter: state.counter + 1 };
    case MINUS:
      return { ...state, counter: state.counter - 1 };
    default:
      return state;
  }
};

export default counterReducer;
