export type ITodoTypes = "pending" | "done";

export interface Item {
  id: string;
  ref: string;
  title: string;
  description: JSX.Element;
  status: ITodoTypes;
  required: boolean;
  links?: Link[];
}

interface Link {
  name: string;
  url: string;
}
