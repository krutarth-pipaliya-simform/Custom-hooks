import { useState } from "react";

export default function useClipboard() {
    const [IsCopied, setIsCopied] = useState(false);

    async function copy(text: string) {
        const type = "text/plain";
        const clipboardItemData = {
            [type]: text,
        };
    
        const clipboardItem = new ClipboardItem(clipboardItemData);
        await navigator.clipboard.write([clipboardItem]);
    
        setIsCopied((prev) => !prev);
    }

    return { IsCopied, copy };
}
// function ClipboardDemo() {
//   const { copied, copy } = useClipboard();
//   return (
//     <div>
//       <button onClick={() => copy("React Hooks")}>
//         Copy Text
//       </button>
//       {copied && <p>Copied!</p>}
//     </div>
//   );
// }
