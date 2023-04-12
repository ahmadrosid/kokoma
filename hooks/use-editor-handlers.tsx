import { useCallback } from "react";
import { Transforms, Editor } from "slate";
import { useSlate } from "slate-react";

export default function useEditorHandlers(editor: Editor) {
  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === "Enter") {
        event.preventDefault();
        editor.insertNode({ type: "paragraph", children: [{ text: "" }] });
        return;
      }
    },
    [editor]
  );

  return { handleKeyDown };
}
