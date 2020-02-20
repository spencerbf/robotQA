import React, { FC, ReactElement } from "react";
import Counter from "./components/counter";

export const App: FC = (): ReactElement => {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Counter />
        </div>
      </header>
    </div>
  );
};

export default App;
