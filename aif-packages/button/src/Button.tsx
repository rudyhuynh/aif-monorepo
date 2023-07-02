import { MouseEventHandler } from "react";

type ButtonProps = {
  className?: string | undefined;
  content: string | React.ReactNode | undefined;
  onClick?: MouseEventHandler | undefined;
  type?: "submit" | "reset" | "button" | undefined;
};

export const Button = ({
  onClick,
  content,
  className,
  type = "button",
}: ButtonProps) => {
  return (
    <button className={"btn " + className} onClick={onClick} type={type}>
      {content}
    </button>
  );
};
