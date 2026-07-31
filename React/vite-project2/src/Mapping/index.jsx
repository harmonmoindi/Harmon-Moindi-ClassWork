/*

*/
function Mapping() {
  const colors = ["green", "yellow", "blue", "black"];

  function singleColor(c, i) {
    if (i === 1) {
      return null;
    }
    return (
      <div key={i}>
        Index is <b>{i}</b> color is <b>{c}</b>
      </div>
    );
  }
  return (
    <div>
      <h1>Mapping Colors</h1>
      <h3>Using Arrow Function</h3>
      {colors.map((color, index) => {
        return (
          <div key={index}>
            Index is <b>{index}</b> color is <b>{color}</b>
          </div>
        );
      })}

      <h3>Using Direct Function</h3>
      {colors.map((c, i) => (
        <div key={i}>
          Index is <b>{i}</b> color is <b>{c}</b>
        </div>
      ))}

      <h3>Using Anonymous Function</h3>
      {colors.map(function (c, i) {
        return (
          <div key={i}>
            Index is <b>{i}</b> color is <b>{c}</b>
          </div>
        );
      })}

      <h3>Using Referencing Function</h3>
      {colors.map(singleColor)}

      <h3>Using a Component</h3>
      {colors.map(function (c, i) {
        return <SingleColorComponent c={c} i={i} key={i} />;
      })}
    </div>
  );
}

function SingleColorComponent(props) {
  const { c, i } = props;
  return (
    <div>
      Index is <b>{i}</b> color is <b>{c}</b>
    </div>
  );
}

export default Mapping;
