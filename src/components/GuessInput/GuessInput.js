import React from "react";

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
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        onChange={(event) => setGuess(event.target.value.toLocaleUpperCase())}
        id="guess-input"
        type="text"
      />
    </form>
  );
}

export default GuessInput;
