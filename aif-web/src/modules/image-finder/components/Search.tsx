import { Button } from "@aif-packages/button";
import { TextInput } from "@aif-packages/inputs";
import { ChangeEventHandler, FormEventHandler, useState } from "react";
import { SearchIcon } from "@aif-packages/icons";

type SearchProps = {
  initialValue: string;
  onSearch: (value: string) => void;
  disabled: boolean;
};

export const Search = ({
  initialValue = "",
  onSearch,
  disabled,
}: SearchProps) => {
  const [value, setValue] = useState(initialValue);

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    onSearch(value);
  };

  const onChangeText: ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  };

  return (
    <form onSubmit={onSubmit} className="input-group mb-3">
      <TextInput
        disabled={disabled}
        value={value}
        onChange={onChangeText}
        placeholder="Search keyword on Title"
        type="search"
      />
      <Button
        type="submit"
        className="btn-outline-secondary"
        content={<SearchIcon />}
        disabled={disabled}
      />
    </form>
  );
};
