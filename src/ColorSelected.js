import React from "react";
import BigBox from "./components/BigBox";

function ColorSelected(props) {
    let value = props.color
    let array = []
    const manyboxes = (num) => {
      for (let i = 0; i < num; i++){
        array.push(<BigBox color={value} />);
      }
    }
    manyboxes(10)

    const listItems = array.map((x) => <div>{x}</div>)
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
      <div className="newgrid">{listItems}</div>
    </>
  );
}

export default ColorSelected;
