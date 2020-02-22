import React from "react";
import { useButton } from "../hooks/useButton";

const PlayerCard = props => {
  const { jugadora } = props;
  const [buttonText, handleClick] = useButton(jugadora.searches);

  return (
    <div>
      <h2>{jugadora.name}</h2>
      <h5>Country - {jugadora.country}</h5>
      <p>
        Searches:
        <button onClick={handleClick}>{buttonText}</button>
      </p>
    </div>
  );
};

export default PlayerCard;
