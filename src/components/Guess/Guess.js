import React from "react";
import { NUM_OF_LETTERS } from "../../constants";
import { range } from "../../utils";

function Guess({ guess }) {
  return (
    <p className="guess">
      {range(NUM_OF_LETTERS).map((index) => (
        <span key={index} className="cell">
          {guess[index] ?? ""}
        </span>
      ))}
    </p>
  );
}

export default Guess;
