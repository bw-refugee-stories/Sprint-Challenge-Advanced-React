import { useState } from 'react';

export const useButton = (string1) => {
    const [buttonText, setButtonText] = useState("Click for searches");

    const handleClick = () => {
        return setButtonText(string1)
    };

    return [buttonText, handleClick];
};