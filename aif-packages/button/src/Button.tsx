import { MouseEventHandler } from "react";

type ButtonProps = {
  className?: string | undefined;
  content: string | React.ReactNode | undefined;
  onClick?: MouseEventHandler | undefined;
  type?: "submit" | "reset" | "button" | undefined;
  disabled: boolean;
};

export const Button = ({
  onClick,
  content,
  className,
  type = "button",
  disabled,
}: ButtonProps) => {
  return (
    <button
      className={"btn " + className}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {content}
    </button>
  );
};
