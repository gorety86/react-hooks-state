import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
    setCount(count + 1);
    console.log(count);
    console.log(`after setState: ${count}`);
setCount((currentCount) => currentCount + 1);
  setCount((currentCount) => currentCount + 1);

  }

  return(
    <div
      onClick={increment}>{count}
   <button onClick={increment}>I have been clicked {count} times</button>
   </div>
  )
}

export default Counter;
