import { useMediaQuery } from "./hooks/useMediaQuery";

function App() {
    const val = useMediaQuery("max-width: 500px max-width: 20px min-height: 20px");
    return <>{val.height + " " + val.width}</>;
}

export default App;
