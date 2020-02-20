import { ADD, MINUS, CounterActionTypes } from "./types";

export function add(): CounterActionTypes {
  return {
    type: ADD
  };
}

export function minus(): CounterActionTypes {
  return {
    type: MINUS
  };
}
