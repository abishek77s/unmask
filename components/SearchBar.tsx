"use client";

import { useRef } from "react";

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchBar = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const searchValue = ref.current?.value || "";
    onSearch(searchValue);
  };

  return (
    <form onSubmit={handleSearch}>
      <div className="flex font-space-grotesk items-center justify-center">
        <div className="pl-6 lg:w-2/6 text-gray-500 w-5/6 bg-white p-3 rounded-sm outline outline-[rgba(255,255,255,0.5)]">
          <input
            ref={ref}
            type="text"
            placeholder="Search companies or sub-brands"
            className="w-full focus:outline-none"
            aria-label="Search"
          />
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
