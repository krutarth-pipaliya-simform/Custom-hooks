import { useEffect, useState } from "react";

export default function useOnlineStatus() {
    const [online, setOnline] = useState(false);
    useEffect(() => {
        const abortController = new AbortController();
        window.addEventListener(
            "offline",
            () => {
                setOnline(false);
            },
            { signal: abortController.signal },
        );
        window.addEventListener(
            "online",
            () => {
                setOnline(true);
            },
            { signal: abortController.signal },
        );
        return () => {
            abortController.abort();
        };
    }, []);
    return online;
}

// function Status() {
//   const online = useOnlineStatus();

//   return (
//     <h2>
//       {online ? "Online" : "Offline"}
//     </h2>
//   );
// }
