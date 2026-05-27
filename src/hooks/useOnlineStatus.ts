import { useState } from "react";

export default function useOnlineStatus() {
    const [online, setOnline] = useState(false);
    window.addEventListener("offline", () => {
        setOnline(false);
    });
    window.addEventListener("online", () => {
        setOnline(true);
    });
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
