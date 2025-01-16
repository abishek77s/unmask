"use client";

import { FiltersTab } from "@/components/FiltersTab";
import NavBar from "@/components/NavBar";
import ParentCompanyList from "@/components/ParentCompanyList";
import SearchBar from "@/components/SearchBar";

const HomePage = () => {
  const handleSearch = (searchText: string) => {
    console.log("Search text:", searchText);
  };

  return (
    <div className=" min-h-screen bg-white ">
      <div className="max-h-60 bg-gradient-to-r from-orange-200 to-pink-400 ">
        <NavBar />
        <div className="py-10">
          <SearchBar onSearch={handleSearch} />
        </div>
      </div>

      <FiltersTab />
      <ParentCompanyList />
    </div>
  );
};

export default HomePage;
