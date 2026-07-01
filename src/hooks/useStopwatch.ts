import { useEffect, useRef, useState } from "react";

export const useStopWatch = () => {
    const [time, setTime] = useState<number>(0);
    const [isRunning, setIsRunning] = useState<boolean>(false);
    const ref = useRef<ReturnType<typeof setTimeout>>(null);

    useEffect(() => {
        clearTimeout(ref.current);
        if (isRunning) {
            ref.current = setTimeout(() => {
                setTime((prev) => prev + 1);
            }, 1000);
        }
    });

    const reset = () => {
        setTime(0);
        setIsRunning(false);
    };
    const start = () => {
        setIsRunning(true);
    };
    const pause = () => {
        setIsRunning(false);
    };
    return { time, start, pause, reset };
};
