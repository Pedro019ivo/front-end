import { ReactNode } from "react";

interface ButtonProps {
  //children: ReactNode
  text: string;
}
export function Button({ text }: ButtonProps) {
  return <button>{text}</button>;
}
