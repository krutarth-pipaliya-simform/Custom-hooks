import { useState } from "react";

function useOnlineStatus() {
    const [online, setOnline] = useState(false);
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
