function Parent() {
  //primitive datatypes
  const str = "Hello World";
  const amount = 2000;
  const isOk = true;
  const notSet = null;
  // using objects.
  const car = {
    model: "Renult Truck",
    manufacture: "Renult",
    engine: {
      cc: 2500,
    },
  };
  const colors = ["blue", "yellow", "purple"];

  return (
    <div>
      <h1>I am the Parent Component</h1>
      <Child1 str={str} amount={amount} isOk={isOk} notSet={notSet} />
      <Child2
        str={str}
        amount={amount}
        isOk={isOk}
        notSet={notSet}
        car={car}
        colors={colors}
      />
      <Child3
        str={str}
        amount={amount}
        isOk={isOk}
        notSet={notSet}
        car={car}
        colors={colors}
      />
    </div>
  );
}

function Child1(props) {
  console.log(props);
  return (
    <div>
      <h1>I am the Child 1 Component</h1>
      <ul>
        <li>
          Favourite string <b>{props.str}</b>
        </li>
        <li>
          Amount <b>{props.amount}</b>
        </li>
        <li>
          isOk <b>{String(props.isOk)}</b>
        </li>
        <li>
          Not set <b>{String(props.notSet)}</b>
        </li>
      </ul>
    </div>
  );
}

//using destructuring.
function Child2(props) {
  const { str, amount, isOk, notSet, car, colors } = props;
  return (
    <div>
      <h1>I am the Child 2 Component</h1>
      <ul>
        <li>
          Favourite string <b>{str}</b>
        </li>
        <li>
          Amount <b>{amount}</b>
        </li>
        <li>
          isOk <b>{String(isOk)}</b>
        </li>
        <li>
          Not set <b>{String(notSet)}</b>
        </li>
        <li>
          car <b>{car.model}</b>
        </li>
        <li>
          car eingine<b>{car.engine.cc}</b>
        </li>
        <li>
          color1 <b>{colors[0]}</b>
        </li>
        <li>
          color2 <b>{colors[1]}</b>
        </li>
      </ul>
    </div>
  );
}

//using prop keywords. Direct destructuring.
function Child3({ str, amount, isOk, notSet, car, colors }) {
  return (
    <div>
      <h1>I am the Child 3 Component</h1>
      <ul>
        <li>
          Favourite string <b>{str}</b>
        </li>
        <li>
          Amount <b>{amount}</b>
        </li>
        <li>
          isOk <b>{String(isOk)}</b>
        </li>
        <li>
          Not set <b>{String(notSet)}</b>
        </li>
        <li>
          car <b>{car.model}</b>
        </li>
        <li>
          Car Engine <b>{car.engine.cc}</b>
        </li>
        <li>
          Color 1 <b>{colors[0]}</b>
        </li>
        <li>
          Color 2 <b>{colors[1]}</b>
        </li>
      </ul>
    </div>
  );
}

export default Parent;
