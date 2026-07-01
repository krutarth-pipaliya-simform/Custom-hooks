import { useEffect, useRef, type DependencyList } from "react";

// Create a custom React hook that behaves like useEffect, but skips execution on the initial render.

export const useOurEffect = (
    callback: () => void | (() => void),
    dependency?: DependencyList,
) => {
    const isFirstRender = useRef<boolean>(true);

    useEffect(() => {
        let res;

        if (isFirstRender.current === false) res = callback();

        isFirstRender.current = false;

        return res;
    }, dependency);
};
