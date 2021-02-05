import React, { useState } from "react";

function App() {
  const [time, setTime] = useState("TIME");

  function click() {
    setInterval(() => {
      let time = new Date().toLocaleTimeString();
      setTime(time);
    }, 1000);
  }

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={click}>Get Time</button>
    </div>
  );
}

export default App;
