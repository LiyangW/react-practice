import React /*, { useRef, useState } */ from "react";
import { useInput } from "./useInput";
import { useColors } from "./colorHooks";

export default function AddColorForm() {
  const [titlePros, resetTitle] = useInput("");
  const [colorProps, resetColor] = useInput("#000000");
  const { addColor } = useColors();

  const submit = (e) => {
    e.preventDefault();
    addColor(titlePros.value, colorProps.value);
    resetTitle();
    resetColor();
  };

  return (
    <form onSubmit={submit}>
      <input {...titlePros} type="text" placeholder="color title..." required />
      <input {...colorProps} type="color" required />
      <button>ADD</button>
    </form>
  );
}
