import { initialValue } from "@/lib/initial-value";
import { useCallback, useMemo, useState } from "react";
import { Descendant, createEditor } from "slate";
import { withHistory } from "slate-history";
import { Editable as SlateEditable, Slate, withReact } from "slate-react";
import useRenderer from "@/hooks/use-renderer";
import useEditorHandlers from "@/hooks/use-editor-handlers";
import SlashCommand from "./slash-command";

function useEditor() {
  return useMemo(() => withHistory(withReact(createEditor())), []);
}

function Editable() {
  const editor = useEditor();
  const [value, setValue] = useState<Descendant[]>(initialValue);
  const updateValue = useCallback((value: Descendant[]) => setValue(value), []);
  const { renderElement, renderLeaf } = useRenderer();
  const { handleKeyDown } = useEditorHandlers(editor);
  return (
    <Slate editor={editor} value={value} onChange={updateValue}>
      <SlateEditable
        onKeyDown={handleKeyDown}
        renderElement={renderElement}
        renderLeaf={renderLeaf}
      />
      <SlashCommand />
    </Slate>
  );
}

export default Editable;
