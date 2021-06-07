import {useState,useCallback} from "react";

export function useModalState(defaultValue = false) {
    const [isOpen, setIsopen] = useState(defaultValue);

    const open =useCallback(() => setIsopen(true), []);
    const close = useCallback(() => setIsopen(false), []);

    return { isOpen, open , close}

    }
