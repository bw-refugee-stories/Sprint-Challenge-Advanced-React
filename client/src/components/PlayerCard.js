import React from 'react';
import { useButton } from "../hooks/useButton";

const PlayerCard = (props) => {
    const { jugadora } = props;
    const [buttonText, setButtonText] = useButton();

    return (
        <div>
            <h2>{jugadora.name}</h2>
            <h5>Country - {jugadora.country}</h5>
            <p>Searches: {jugadora.searches}</p>
        </div>
    );
};

export default PlayerCard;
