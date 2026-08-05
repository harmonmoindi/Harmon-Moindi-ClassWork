import { useState } from "react";

/*
1. Move the color and set color state inside the ColorForm. <increase performance>
to see before and after.
console.log ("component name", new Date()) //for each component
2. Add a button on single color to remove the color. //<remove color>
hint: [perform a state update].
*/

function ColorsAndCircles() {
  const [colors, setColors] = useState([]);
  const [radius, setRadius] = useState("");
  console.log("ColorsAndCircles render", new Date());

  return (
    <div>
      <ColorForm colors={colors} setColors={setColors} />
      <ColorList colors={colors} setColors={setColors} />
    </div>
  );
}

function ColorForm(props) {
  const { setColors, colors } = props;
  const [color, setColor] = useState("");
  console.log("ColorForm render", new Date());

  const onSubmit = () => {
    const clonedColors = [...colors];
    clonedColors.push(color);
    setColors(clonedColors);
    setColor(""); // clear the input after adding
  };

  return (
    <div>
      <label>Enter color:</label>
      <input value={color} onChange={(e) => setColor(e.target.value)} />
      <button onClick={onSubmit}>Add a Color</button>
    </div>
  );
}

function ColorList(props) {
  const { colors, setColors } = props;
  console.log("ColorList render", new Date());

  const onRemove = (index) => {
    const clonedColors = [...colors];
    clonedColors.splice(index, 1);
    setColors(clonedColors);
  };

  return (
    <div style={{ marginTop: "30px" }}>
      {colors.map((color, index) => (
        <div
          key={index}
          style={{
            margin: "10px",
            width: "100%",
            height: "30px",
            backgroundColor: color,
            color: "white",
            padding: "10px",
          }}
        >
          {color}
          <button onClick={() => onRemove(index)}>Remove</button>
        </div>
      ))}
    </div>
  );
}

export default ColorsAndCircles;
