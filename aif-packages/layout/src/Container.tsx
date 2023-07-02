import { CSSProperties } from "react";

type ContainerProps = {
  className?: string | undefined;
  children: React.ReactNode;
  style?: CSSProperties | undefined;
};

export const Container = ({ className, children, style }: ContainerProps) => {
  return (
    <div style={style} className={"container-fluid " + className}>
      {children}
    </div>
  );
};
