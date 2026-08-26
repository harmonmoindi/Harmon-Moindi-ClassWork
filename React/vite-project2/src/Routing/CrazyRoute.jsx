<<<<<<< HEAD
import Navigation1 from "./Navigation1";
import Navigation2 from "./Navigation2";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

function CrazyRoute() {
  const [countDown, setCountDown] = useState(10);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown((c) => c - 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (countDown <= 0) {
      navigate(-1);
    }
  }, [countDown]);
  return (
    <div>
      <Navigation1 />
      <Navigation2 />
      <h1>You must be crazy to be here. {countDown}</h1>
=======
function CrazyRoute() {
  return (
    <div>
      <h1>You must be crazy to be here</h1>
>>>>>>> e326ae8 (Routing was learnt today)
    </div>
  );
}

export default CrazyRoute;
