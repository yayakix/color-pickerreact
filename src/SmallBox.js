import React, { useState } from "react";
import ColorSelected from "./ColorSelected";

    function makeColor() {
      const randomNum = (min, max) =>
        min + Math.floor(Math.random() * (max - min + 1));
      const r = randomNum(0, 255);
      const g = randomNum(0, 255);
      const b = randomNum(0, 255);
      return `rgb(${r},${g},${b})`;
    }
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

// console.log(colorboxes)
// for button click (below)


function SmallBox(props) {
  const [currColor, setCurrColor] = useState("rgb(255, 255, 255)");

    function makeColor() {
      const randomNum = (min, max) =>
        min + Math.floor(Math.random() * (max - min + 1));
      const r = randomNum(0, 255);
      const g = randomNum(0, 255);
      const b = randomNum(0, 255);
      return `rgb(${r},${g},${b})`;
    }
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
  const [colorBoxes, setcolorBoxes] = useState(colorboxes);


  function newColors(e) {
      console.log(colorboxes)
   setcolorBoxes(colorboxes)
  }
     for (let i = 0; i < 10; i++) {
       console.log(colorboxes[0].props.style);
    //   colorboxes[0].props.style.backgroundColor = makeColor
     }
//   console.log(colorboxes[0].props.style);
  let colorcheck = "";
  function handleClick(e) {
    colorcheck = e.target.style.backgroundColor;
    setCurrColor(colorcheck)
    // console.log("color check is " + colorcheck);
  }

  return (
    <>
      {/* <div>heyyyyy</div> */}
      <div onClick={(e) => handleClick(e)} className="boxcontainer">
        {colorBoxes}
      </div>
      <div className="selectcontainer">
        <h2>Selected Color</h2>
        <button id="new" onClick={(e) => newColors(e)}>
          Generate more colors
        </button>
        <ColorSelected color={currColor} />
      </div>
    </>
  );
}

export default SmallBox;
