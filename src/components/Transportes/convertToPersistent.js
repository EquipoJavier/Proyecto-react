import { useEffect } from "react";

const usePersistentState = (key) => {
    const persistent = sessionStorage.getItem(key);

    useEffect(() => {
        localStorage.setItem(key, persistent);
    }, [persistent, key]);

};

export default usePersistentState;