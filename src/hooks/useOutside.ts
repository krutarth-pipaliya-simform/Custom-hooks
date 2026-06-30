import { useEffect, type RefObject } from "react";

export const useOutsideClick = <T>(callback: () => void, ref: RefObject<T>) => {
    useEffect(() => {
        window.addEventListener("mousedown", (e) => {
            if (e.target !== ref.current) callback();
        });
    }, [callback, ref]);
};
