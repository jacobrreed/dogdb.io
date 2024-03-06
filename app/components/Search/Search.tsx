import { SearchIcon } from "@/app/components/Search/SearchIcon";
import { Input } from "@nextui-org/react";
import React from "react";

interface Props {}

export const Search: React.FC<Props> = () => {
  return (
    <Input
      placeholder="Search for a movie..."
      startContent={<SearchIcon size={18} />}
    />
  );
};
