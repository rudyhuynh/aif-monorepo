import { ChangeEventHandler } from "react";

type TextInputProps = {
  value: string;
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
};

export const TextInput = ({ value, onChange }: TextInputProps) => {
  return <input value={value} onChange={onChange} />;
};
