import React /*, { useState } */ from "react";
import "./App.css";
import ColorList from "./components/ColorList";
import AddColorForm from "./components/AddColorForm";
import { Routes, Route } from "react-router-dom";
import { ColorDetails } from "./components/ColorDetails";

export default function App() {
  /* After implementing context */
  return (
    <>
      <AddColorForm />

      <Routes>
        <Route path="/" element={<ColorList />}></Route>

        <Route path=":id" element={<ColorDetails />}></Route>
      </Routes>
    </>
  );
}
