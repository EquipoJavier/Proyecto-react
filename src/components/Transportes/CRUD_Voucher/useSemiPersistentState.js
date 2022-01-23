import { useState, useEffect } from "react";

const useSemiPersistentState = (key, initialState) => {
    const [value, setValue] = useState(
        sessionStorage.getItem(key) || initialState
    );

    useEffect(() => {
        sessionStorage.setItem(key, value);
    }, [value, key]);

    return [value, setValue];
};

export default useSemiPersistentState;