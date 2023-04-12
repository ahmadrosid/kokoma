import { SlateElement, SlateLeaf } from "@/components/slate-element";
import { useCallback } from "react";
import { RenderElementProps, RenderLeafProps } from "slate-react";

export default function useRenderer() {
  const renderElement = useCallback(
    (props: RenderElementProps) => <SlateElement {...props} />,
    []
  );
  const renderLeaf = useCallback(
    (props: RenderLeafProps) => <SlateLeaf {...props} />,
    []
  );
  return { renderElement, renderLeaf };
}
