import { useState } from "react";
import "./StarRating.css";

export default function StarRating({ totalStars = 5, onChange }) {
  const [rating, setRating] = useState(0);      // Final saved rating
  const [hovered, setHovered] = useState(0);    // Temporary hover rating

  const handleRating = (value) => {
    setRating(value);
    onChange && onChange(value);
  };

  return (
    <div className="star-container">
      {Array.from({ length: totalStars }, (_, i) => {
        const fullValue = i + 1;
        const halfValue = i + 0.5;

        return (
          <div className="star-wrapper" key={i}>
            {/* Half Star */}
            <span
              className={
                (hovered >= halfValue || rating >= halfValue)
                  ? "star half active"
                  : "star half"
              }
              onMouseEnter={() => setHovered(halfValue)}
              onMouseLeave={() => setHovered(0)}
              onClick={() => handleRating(halfValue)}
            >
              ★
            </span>

            {/* Full Star */}
            <span
              className={
                (hovered >= fullValue || rating >= fullValue)
                  ? "star full active"
                  : "star full"
              }
              onMouseEnter={() => setHovered(fullValue)}
              onMouseLeave={() => setHovered(0)}
              onClick={() => handleRating(fullValue)}
            >
              ★
            </span>
          </div>
        );
      })}
    </div>
  );
}
