import { ChangeEventHandler, HTMLInputTypeAttribute } from "react";

type TextInputProps = {
  value: string;
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
  placeholder?: string | undefined;
  type?: HTMLInputTypeAttribute | undefined;
  disabled: boolean;
};

export const TextInput = ({
  type = "text",
  value,
  onChange,
  placeholder,
  disabled,
}: TextInputProps) => {
  return (
    <input
      type={type}
      className="form-control"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
    ></input>
  );
};
