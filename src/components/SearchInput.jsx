import { Search } from "lucide-react";
import React from "react";

const SearchInput = () => {
  return (
    <div className="group">
      <div className="bg-violet-base bg-opacity-40 px-4 py-2 flex items-center justify-start w-full rounded-full gap-2 group-focus-within:ring-2 ring-violet-dark">
        <Search className="text-violet-base group-focus-within:text-violet-dark cursor-pointer" />
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent text-sm text-violet-dark placeholder-violet-base border-0 focus:outline-none"
        />
      </div>
    </div>
  );
};

export default SearchInput;
