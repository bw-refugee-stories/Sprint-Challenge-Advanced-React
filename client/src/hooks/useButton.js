import React, { useState } from 'react';

export const useButton = () => {
    const [buttonText, setButtonText] = useState("Click Me");

    const handleClick = () => {
        return setButtonText("I was clicked");
    };

    return <button onClick={handleClick}>{buttonText}</button>;
};