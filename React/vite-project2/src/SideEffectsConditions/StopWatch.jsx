/*
start, stop, reset, and lap buttons
*/
import { useEffect, useState } from "react";

function StopWatch() {
  const [isStopped, setIsStopped] = useState(true);
  const [k, setK] = useState(0);
  //tracking dependancies
  useEffect(() => {
    if (isStopped === false) {
      setK(k + 1);
    }
  }, [isStopped]);

  return (
    <div>
      <div>
        <button onClick={() => setIsStopped(false)}>Start</button>
        <button onClick={() => setIsStopped(true)}>Stop</button>
        <button onClick={() => setK(0)}>Reset</button>
        <b>{k}</b>
      </div>
      <div>Start clicked how many times: {k}</div>
      <ShowTimer isStopped={isStopped} k={k} />
    </div>
  );
}

function ShowTimer({ isStopped, k }) {
  if (isStopped) {
    return null;
  }
  return <Timmer k={k} />;
}
function Timmer({ k }) {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("for k is", k, "time is", time);
      setTime((c) => c + 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <b>{time}</b>
    </div>
  );
}

export default StopWatch;
