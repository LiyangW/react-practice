import React/*, { useState } */from "react";
import "./App.css";
import ColorList from "./components/ColorList";
import AddColorForm from "./components/AddColorForm";

export default function App() {
  /* After implementing context */
  return (
    <>
      <AddColorForm />
      <ColorList />
    </>
  );
}
