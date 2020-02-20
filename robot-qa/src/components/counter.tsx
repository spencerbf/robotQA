import React, { FC, ReactElement } from "react";
import { connect } from "react-redux";
import { AppState } from "../store";
import { add, minus, CounterActionTypes } from "../store/counter";

interface AppProps {
  add: typeof add;
  minus: typeof minus;
  counter: number;
}

export const Counter: FC<AppProps> = ({
  add,
  minus,
  counter
}): ReactElement => {
  const handleIncrement = (): void => {
    add();
  };

  const handleDecrement = (): void => {
    minus();
  };
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <div>{counter}</div>
          <button onClick={handleIncrement}>Add</button>
          <button onClick={handleDecrement}>Minus</button>
        </div>
      </header>
    </div>
  );
};

interface linkStateProps {
  counter: number;
}

const mapStateToProps = (state: AppState): linkStateProps => ({
  counter: state.counter.counter
});

export default connect(mapStateToProps, {
  add,
  minus
})(Counter);
