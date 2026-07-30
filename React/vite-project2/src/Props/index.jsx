function Parent() {
  //primitive datatypes
  const str = "Hello World";
  const amount = 2000;
  const isOk = true;
  const notSet = null;

  return (
    <div>
      <h1>I am the Parent Component</h1>
      <Child1 str={str} amount={amount} isOk={isOk} notSet={notSet} />
    </div>
  );
}

function Child1(props) {
  console.log(props);
  return (
    <div>
      <h1>I am the Child Component</h1>
      <ul>
        <li>
          Foourite string <b>{props.str}</b>
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

export default Parent;
