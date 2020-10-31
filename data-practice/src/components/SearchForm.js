import React from "react";
import { useInput } from "./useInput";
export default function SearchForm({ value, onSearch = (f) => f }) {
  const [inputProps] = useInput(value);
  const submit = (e) => {
    e.preventDefault();
    onSearch(inputProps.value);
  };
  return (
    <form onSubmit={submit}>
      <input type="text" placeholder="Search.." {...inputProps}></input>
      <button type="submit">Submit</button>
    </form>
  );
}
