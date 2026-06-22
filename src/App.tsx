import { useShortcut } from "./hooks/useShortcut";

function App() {
    useShortcut({ ctrl: true, shift: true, key: "A" }, () =>
        console.log("rubn"),
    );
    return <></>;
}

export default App;
