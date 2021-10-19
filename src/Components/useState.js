import React, { useState } from "react";

function UseStateComp() {
  let myVal = "This text should change after click!";
  let [val, setVal] = useState(myVal);

  const textChanger = () => {
    setVal(val == "Changed" ? myVal : "Changed");
    console.log(val);
  };

  return (
    <div className="App">
      <h1>{val}</h1>
      <button onClick={textChanger}>Click</button>
    </div>
  );
}

export default UseStateComp;
