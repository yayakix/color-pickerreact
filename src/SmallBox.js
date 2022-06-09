import React, { useState } from "react";
import ColorSelected from "./ColorSelected";
import BigBox from "./components/BigBox";


function SmallBox(props) {
  const [currColor, setCurrColor] = useState("white")
  
  
  function makeColor() {
    const randomBetween = (min, max) =>
      min + Math.floor(Math.random() * (max - min + 1));
    const r = randomBetween(0, 255);
    const g = randomBetween(0, 255);
    const b = randomBetween(0, 255);
    return `rgb(${r},${g},${b})`;
  };

  const colors = [];

  for (let i = 0; i < 64; i++) {
    colors.push(" ");
  }

  const colorboxes = colors.map((color, index) => (
    <div
      key={index}
      className="box"
      style={{
        backgroundColor: makeColor(),
      }}
    >
      {color}
    </div>
  ));
  //    for (let i = 0; i < 5; i++) {
  //      console.log(colorboxes[0].props.style);
  //     colorboxes[0].props.style.backgroundColor = makeColor
  //    }
  console.log(colorboxes[0].props.style);
  let colorcheck = "";
  function handleClick(e) {
    colorcheck = e.target.style.backgroundColor;
    setCurrColor(colorcheck)
    console.log("color check is " + colorcheck);
  }

  return (
    <>
      {/* <div>heyyyyy</div> */}
      <div onClick={(e) => handleClick(e)} className="boxcontainer">
        {colorboxes}
      </div>
      <ColorSelected color={currColor} />
    </>
  );
}

export default SmallBox;
