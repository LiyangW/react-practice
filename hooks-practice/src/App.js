import React from "react";
import "./App.css";
import CheckBox from "./component/CheckBox";
import Phrase from "./component/Phrase";
import { CallBack, WordCount } from "./component/Words";
import { useWindowSize, useMousePosition } from "./component/hooks";
// import { useEffect, useLayoutEffect } from "react";

export default function App() {
  const [x, y] = useWindowSize();
  const [a, b] = useMousePosition();

  // useEffect(() => console.log("useEffect"));
  // useLayoutEffect(() => console.log("useLayoutEffect"));

  return (
    <>
      <h1>open your console</h1>
      <CallBack />
      <CheckBox /> <br />
      <Phrase />
      <WordCount>what is that f</WordCount>
      <p>
        windowsize is {x} * {y}
      </p>
      <p>
        mouse position is {a} * {b}
      </p>
    </>
  );
}
