import React, { memo, useState,useCallback } from "react";

const Cat = memo(({ name, meow = (f) => f }) => {
  console.log(`rendering ${name}`);
  return <p onClick={() => meow(name)}>{name}</p>;
});

// const PureCat = memo(Cat,()=> true);

export default function CatFunc() {
  const [cats, setCats] = useState(["Biscuit", "Jungle", "Outlaw"]);
  const meow = useCallback((name) => console.log(`${name} has meowed`),[])
  return (
    <>
      {cats.map((name, i) => (
        <Cat
          key={i}
          name={name}
          meow={meow}
        />
      ))}
      <button onClick={() => setCats([...cats, prompt("Name a cat")])}>
        Add a Cat
      </button>
    </>
  );
}
