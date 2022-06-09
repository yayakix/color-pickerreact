import React from "react";
import BigBox from "./components/BigBox";


function ColorSelected(props) {
    let value = props.color
    // console.log(props.color)

  return (
    <>
      <div
        className="selectedcolor"
        style={{
          backgroundColor: value,
        }}
      >
        {value}
      </div>
      <div className="bigboxes">
        <BigBox color={value} />
        <BigBox color={value} />
        <BigBox color={value} />
      </div>
    </>
  );
}

export default ColorSelected;
