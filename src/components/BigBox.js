import React, { useState } from "react";

function BigBox(props) {
    const [boxColor, setBoxColor] = useState("white");
function handleClick(e){
    setBoxColor(props.color)
}

  return (
    <>
      <div className="bigboxcontainer">
        <div
          onClick={(e) => handleClick(e)}
          className="bigbox"
          style={{
            backgroundColor: boxColor,
          }}
        ></div>
      </div>
    </>
  );
}

export default BigBox;
