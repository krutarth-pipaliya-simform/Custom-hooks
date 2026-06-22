import { useEffect, useState } from "react";

export const useFirstRender = () => {
    const [isFirstRender, setIsFirstRender] = useState<boolean>(true);
    useEffect(() => {
        return () => {
            setIsFirstRender(false);
        };
    }, []);
    return isFirstRender;
};
