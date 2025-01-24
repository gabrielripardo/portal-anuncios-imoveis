import { JSX } from "react";

export interface Icon {
  url: string;
  size: number;
}

export interface Link {
  label: string;
  url: string;
}

export interface Content {
  heading: string;
  paragraph: string;
  button: JSX.Element;
  links: Link[];
}

export default interface Tab {
  id: number;
  icon: Icon;
  title: string;
  content: Content;
}
