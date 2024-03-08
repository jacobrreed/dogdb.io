import { SearchIcon } from "@/app/components/Search/SearchIcon";
import { Input, InputProps } from "@nextui-org/react";
import React from "react";

interface Props extends InputProps {}

export const Search: React.FC<Props> = (props) => {
  return (
    <Input
      placeholder="&nbsp;Search for a movie..."
      startContent={<SearchIcon size={18} />}
      isClearable
      size="lg"
      {...props}
    />
  );
};
