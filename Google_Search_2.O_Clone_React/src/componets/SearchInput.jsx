import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import MicIcon from "../assets/mic.svg";
import ImageIcon from "../assets/image.svg";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const SearchInput = ({ query, searchQuery, setSearchQuery }) => {
  const navigate = useNavigate();

  const handleInput = (event) => {
    if (event.key === "Enter" && searchQuery.length > 0) {
      navigate(`/${searchQuery}/${1}`);
    }
  };

  return (
    <div
      id="searchBox"
      className="h-[46px] w-full md:w-[584px] flex items-center gap-3 px-4 border border-[#3a6fe2] rounded-3xl hover:bg-slate-100 hover:shadow-c hover:border-0 focus-within:shadow-c focus-within:border-0"
    >
      <AiOutlineSearch size={18} color="#9aa0a6" />
      <input
        type="text"
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyUp={handleInput}
        value={searchQuery}
        autoFocus
        className="grow outline-0 text-black/[0.87]"
      />
      <div className="flex items-center gap-3">
        {searchQuery && (
          <IoMdClose
            size={24}
            color="#70757a"
            className="cursor-pointer"
            onClick={() => setSearchQuery("")}
          />
        )}
        <img className="h-6 w-6 cursor-pointer" src={MicIcon} alt="" />
        <img className="h-6 w-6 cursor-pointer" src={ImageIcon} alt="" />
      </div>
    </div>
  );
};

export default SearchInput;
