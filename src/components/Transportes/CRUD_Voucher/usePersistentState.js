import { useState, useEffect } from "react";

const usePersistentState = (key, initialState) => {
    const [value, setValue] = useState(
        localStorage.getItem(key) || initialState
    );

    useEffect(() => {
        if(initialState!==null){
            localStorage.setItem(key, value);
        }
    }, [value, key, initialState]);

    return [value, setValue ];
};

export default usePersistentState;