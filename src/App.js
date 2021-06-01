import React from "react";
import Stopwatch from "./Stopwatch/Stopwatch";
import Text from "./Text/Text";

function App() {
  return (
    <div>
      <header>
        <Stopwatch />
      </header>
      <div>
        <Text />
      </div>
    </div>
  );
}

export default App;
