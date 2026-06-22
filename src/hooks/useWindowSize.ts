import { useEffect, useState } from "react";

export const useWindowSize = () => {
    const [dimensions, setDimensions] = useState({
        innerHeight: window.innerHeight,
        innerWidth: window.innerWidth,
    });

    useEffect(() => {
        const handleResize = () => {
            setDimensions({
                innerHeight: window.innerHeight,
                innerWidth: window.innerWidth,
            });
        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return dimensions;
};
