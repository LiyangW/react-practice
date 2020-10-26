import React, { useState, useEffect } from "react";

export default function Checkbox() {
  const [checked, setChecked] = useState(false);

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
        onChange={() => setChecked((checked) => !checked)}
      />
      {checked ? "checked" : "not checked"}
    </>
  );
}
