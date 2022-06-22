import React from "react";
import BigBox from "./components/BigBox";


function ColorSelected(props) {
    // const [boxsize, setBoxSize] = useState("");

    let value = props.color
    let array = []
    const manyboxes = (num) => {
      for (let i = 1; i < num; i++){
        array.push(<BigBox color={value} className='onebox' />);
      }
    }
    manyboxes(121)

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
      <div className="boxgrid">{listItems}</div>

    </>
  );
}

export default ColorSelected;
