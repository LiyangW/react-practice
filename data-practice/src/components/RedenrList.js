import React from "react";

export function List({ data = [], renderEmpty, renderItem }) {
  return !data.length ? (
    renderEmpty
  ) : (
    <ul>
      {data.map((dt, key) => (
        <li key={key}>{renderItem(dt)}</li>
      ))}
    </ul>
  );
}
const tahoe_peaks = [
  { name: "Freel Peak", elevation: 10891 },
  { name: "Monument Peak", elevation: 10067 },
  { name: "Pyramid Peak", elevation: 9983 },
  { name: "Mt. Tallac", elevation: 9735 },
];

export function TahoePeaks() {
  return (
    <List
      data={tahoe_peaks}
      renderEmpty={<p>empty</p>}
      renderItem={(peak) => (
        <>
          {peak.name} -- {peak.elevation.toLocaleString()}
        </>
      )}
    />
  );
}
