import React from 'react';
import PlayerCard from "./PlayerCard";

const PlayerCardList = (props) => {
    const { playerData } = props;
    return (
        <div>
            {playerData.map(player => {
                return <PlayerCard jugadora={player} />
            })}
        </div>
    );
};

export default PlayerCardList;
