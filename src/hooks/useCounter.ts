import { useState } from "react";

export default function useCounter(initialValue = 0) {
    const [count, setCount] = useState(initialValue);
    const increment = () => {
        setCount((prev) => prev + 1);
    };
    const decrement = () => {
        setCount((prev) => prev - 1);
    };
    const reset = () => {
        setCount(initialValue);
    }
    return {
        count, setCount, increment, decrement, reset
    }
}

// function Counter() {
//     const { count, increment, decrement, reset } = useCounter(5);
// }
