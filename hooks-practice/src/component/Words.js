import React, { useEffect, useState, useMemo, useCallback } from "react";

const useAnyKeyToRender = () => {
  const [, forceRender] = useState();

  useEffect(() => {
    window.addEventListener("keydown", forceRender);
    return () => window.removeEventListener("keydown", forceRender);
  }, []);
};

export function CallBack() {
  useAnyKeyToRender();
  const fn = useCallback(() => {
    console.log("hello");
    console.log("world");
  }, []);

// const fn = () => {
//     console.log("hello");
//     console.log("world");
// }

  useEffect(() => {
    console.log("fresh render call back");
    fn();
  }, [fn]);
  return (<p></p>)
}

export function WordCount({ children = "" }) {
  useAnyKeyToRender();

  const words = useMemo(() => {
    const words = children.split(" ");
    return words;
  }, [children]);

//   const words = () => {
//     const words = children.split(" ");
//     return words
//   }

  useEffect(() => {
    console.log("fresh render word");
  }, [words]);

  return (
    <>
      <p>{children}</p>
      <p>
        <strong>{words.length} - words</strong>
      </p>
    </>
  );
}
