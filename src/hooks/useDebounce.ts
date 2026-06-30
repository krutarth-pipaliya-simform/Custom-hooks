import { useEffect, useRef } from "react";

export const useDebounce = (callback: () => void, delay: number) => {
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    useEffect(() => {
        timerRef.current = setTimeout(callback, delay);
        return () => {
            if (timerRef.current) {
                clearTimeout(timerRef.current);
            }
        };
    }, [delay, callback]);
};
