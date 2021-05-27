import React from "react";
import Stopwatch from "./Stopwatch/Stopwatch";
import Text from "./Text/Text";
import './App.css';

function App() {
  return (
    <div>
      <header>
        <Stopwatch />
      </header>
      <div className='text'>
          <Text />
        </div>
      </div>
  );
}

export default App;
