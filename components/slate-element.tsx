import { RenderElementProps, RenderLeafProps } from "slate-react";

export function SlateElement({
  attributes,
  children,
  element,
}: RenderElementProps): JSX.Element {
  switch (element.type) {
    case "paragraph":
      return <p {...attributes}>{children}</p>;
    case "heading":
      switch (element.level) {
        case 1:
          return (
            <h1 className="font-bold text-4xl" {...attributes}>
              {children}
            </h1>
          );
        case 2:
          return (
            <h2 className="font-bold text-3xl" {...attributes}>
              {children}
            </h2>
          );
        case 3:
          return (
            <h3 className="font-bold text-2xl" {...attributes}>
              {children}
            </h3>
          );
      }
    default:
      return <p {...attributes}>{children}</p>;
  }
}

export function SlateLeaf(props: RenderLeafProps): JSX.Element {
  return <span {...props.attributes}>{props.children}</span>;
}
