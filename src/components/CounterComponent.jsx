import React, { useState } from "react";
 
const CounterComponent = () => {
       const [count, setCount] = useState(6);
     
       return (
       <div>
           <p>Counter Component - {count}</p>
           <h6>Number is {count % 2 === 0 ? "Even" :"Odd"}</h6>
          
           <button className="Button-increment" onClick={() => setCount(count +1)}>Increment</button>
           <button className="Button-increment" onClick={() => setCount(count -1)}>Decrement</button>

       </div>
       );
};

export default CounterComponent;