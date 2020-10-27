import React, {  useEffect,useReducer } from "react";

export default function Checkbox() {
  const [checked, toggle] = useReducer(checked => !checked,false);

  useEffect(() => {
    localStorage.setItem("checkbox-value", checked);
  },[checked]);
  useEffect(() => {
    console.log(checked ? "Yes, checked" : "No, not checked");
  },[checked]);

//   useEffect(() => {
//     txtInputRef.current.focus();
//   });

  return (
    <>
      <input
        type="checkbox"
        value={checked}
        onChange={toggle}
      />
      {checked ? "checked" : "not checked"}
    </>
  );
}
