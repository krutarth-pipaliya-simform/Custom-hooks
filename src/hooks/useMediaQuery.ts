export const useMediaQuery = (str: string) => {
    const string = getSingleSpaceString(str);
    const val = fetchDimensionFromString(string);
    return val;
};

const patterns: Array<{
    label: string;
    isMax: boolean;
    dimension: "width" | "height";
}> = [
    {
        label: "min-width: ",
        isMax: false,
        dimension: "width",
    },
    {
        label: "min-height: ",
        isMax: false,
        dimension: "height",
    },
    {
        label: "max-width: ",
        isMax: true,
        dimension: "width",
    },
    {
        label: "max-height: ",
        isMax: true,
        dimension: "height",
    },
];

const fetchDimensionFromString = (match: string) => {
    const dimensions = {
        height: null,
        width: null,
    };
    for (const { label: pattern, isMax, dimension } of patterns) {
        let value = isMax ? Infinity : -Infinity;
        while (match.includes(pattern)) {
            const numberStartingIndex = match.indexOf(pattern) + pattern.length;
            let number = "",
                endingIndex = -1,
                hasError = false;
            for (let i = numberStartingIndex; i < match.length; i++) {
                if (
                    match.charCodeAt(i) <= "9".charCodeAt(0) &&
                    match.charCodeAt(i) >= "0".charCodeAt(0)
                )
                    number = number + match[i];
                else if (match[i] === "p" && match[i + 1] === "x") {
                    endingIndex = i + 1;
                    break;
                } else {
                    hasError = true;
                    endingIndex = i;
                    break;
                }
            }
            if (endingIndex === -1) {
                hasError = true;
            }
            if (!hasError) {
                value = isMax
                    ? Math.min(value, +number)
                    : Math.max(value, +number);
            }
            match =
                match.slice(0, match.indexOf(pattern)) +
                match.slice(endingIndex + 1);
        }
        if (isFinite(value)) dimensions[dimension] = value;
    }
    return dimensions;
};

const getSingleSpaceString = (str: string) => {
    let match = "";
    for (const x of str) {
        if (x === " ") {
            if (match.length && match[match.length - 1] !== " ")
                match = match + x;
        } else {
            match = match + x;
        }
    }
    return match;
};
