export const ADD = "ADD";
export const MINUS = "MINUS";

export interface CounterState {
  counter: number;
}

export interface IncrementCounter {
  type: typeof ADD;
}

export interface DecrementCounter {
  type: typeof MINUS;
}

export type CounterActionTypes = IncrementCounter | DecrementCounter;
