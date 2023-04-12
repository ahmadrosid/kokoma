import { Element } from "slate";

export const initialValue: Element[] = [
  {
    type: "heading",
    level: 1,
    children: [{ text: "Title" }],
  },
  {
    type: "heading",
    level: 2,
    children: [{ text: "Title" }],
  },
  {
    type: "heading",
    level: 3,
    children: [{ text: "Title" }],
  },
  {
    type: "paragraph",
    children: [{ text: "Hello world" }],
  },
];
