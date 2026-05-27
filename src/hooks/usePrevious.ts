import { useEffect, useState } from "react";

export default function usePrevious(value) {
    const [prevState, setPrevState] = useState(value);
    useEffect(() => {
        () => {
            setPrevState(value);
        };
    }, [value]);
    return prevState;
}

// function Demo() {
//   const [count, setCount] = useState(0);
//   const previous = usePrevious(count);

//   return (
//     <div>
//       <h2>Current: {count}</h2>
//       <h2>Previous: {previous}</h2>
//       <button onClick={() => setCount(count + 1)}>
//         Increment
//       </button>
//     </div>
//   );
// }
