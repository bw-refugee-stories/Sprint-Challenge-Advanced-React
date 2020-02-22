import React from 'react';

const PlayerCard = (props) => {
    const { jugadora } = props;
    return (
        <div>
            <h2>{jugadora.name}</h2>
            <p>Country: {jugadora.country}</p>
        </div>
    );
};

export default PlayerCard;
