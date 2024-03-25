import React from "react";
import { NUM_OF_LETTERS } from "../../constants";

function GuessInput({ addGuess }) {
  const [guess, setGuess] = React.useState("");

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        setGuess("");
        addGuess(guess);
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        value={guess}
        minLength={NUM_OF_LETTERS}
        maxLength={NUM_OF_LETTERS}
        pattern={`[a-zA-Z]{${NUM_OF_LETTERS}}`}
        title={`${NUM_OF_LETTERS} letter word`}
        onChange={(event) => setGuess(event.target.value.toLocaleUpperCase())}
        id="guess-input"
        type="text"
      />
    </form>
  );
}

export default GuessInput;
