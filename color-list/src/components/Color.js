import React from "react";
import StarRating from "./StarRating";
import { useColors } from "./colorHooks";
import { useNavigate } from "react-router-dom";

export default function Color({ id, title, color, rating }) {
  let navigate = useNavigate();
  const { rateColor, removeColor } = useColors();
  return (
    <section>
      <h1>{title}</h1>
      <button onClick={() => removeColor(id)}>X</button>
      <div
        style={{ height: 50, backgroundColor: color }}
        onClick={() => navigate(`/${id}`)}
      />
      <StarRating
        selectedStars={rating}
        onRate={(rating) => rateColor(id, rating)}
      />
    </section>
  );
}
