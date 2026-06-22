import { useEffect, useMemo, useRef } from "react";

export const useShortcut = (
    config: {
        ctrl?: boolean;
        shift?: boolean;
        key: string;
    } = {
        ctrl: false,
        shift: false,
        key: "a",
    },
    callback: () => void,
) => {
    const pressedKeys = useRef(new Set<string>());

    const combination = useMemo(() => {
        const set = new Set<string>([config.key]);

        if (config.ctrl) set.add("Control");
        if (config.shift) set.add("Shift");

        return set;
    }, [config.ctrl, config.shift, config.key]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            pressedKeys.current.add(e.key);
            if (areSetsEqual(combination, pressedKeys.current)) {
                callback();
            }
        };

        const handleKeyUp = (e: KeyboardEvent) => {
            pressedKeys.current.delete(e.key);
            if (areSetsEqual(combination, pressedKeys.current)) {
                callback();
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        window.addEventListener("keyup", handleKeyUp);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            window.removeEventListener("keyup", handleKeyUp);
        };
    }, [combination, callback]);
};

const areSetsEqual = <T>(a: Set<T>, b: Set<T>) => {
    if (a.size !== b.size) return false;

    for (const item of a) {
        if (!b.has(item)) {
            return false;
        }
    }

    return true;
};
