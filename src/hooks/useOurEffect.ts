import { useEffect, useRef } from "react";

// Create a custom React hook that behaves like useEffect, but skips execution on the initial render.

export const useOurEffect = (callback: () => void | (() => void), dependency?: Array<unknown>) => {
    const isFirstRender = useRef<boolean>(true);

    useEffect(() => {
        let res;

        if (isFirstRender.current === false) res = callback();

        isFirstRender.current = false;

        return res;
    }, [callback, dependency]);
};
