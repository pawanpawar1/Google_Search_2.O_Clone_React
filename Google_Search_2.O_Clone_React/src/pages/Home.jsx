import React, { useState } from "react";
import logo from "../assets/google-logo.png";
import HomeHeader from "./HomeHeader";
import SearchInput from "../componets/SearchInput";
import Footer from "./Footer";
import { useNavigate, useParams } from "react-router-dom";

const Home = () => {
  const { query } = useParams();
  const [searchQuery, setSearchQuery] = useState(query || "");
  const navigate = useNavigate();

  const handleGoogleSearch = () => {
    if (searchQuery.length > 0) {
      navigate(`/${searchQuery}/${1}`);
    }
  };
  return (
    <div className="h-[100vh] flex flex-col">
      <HomeHeader />
      <main className="grow flex justify-center">
        <div className="w-full px-5 flex flex-col items-center mt-44">
          <img className="w-[172px] md:w-[272px] mb-8" src={logo} alt="logo" />
          <SearchInput query={query} searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
          <div className="flex gap-2 text-[#3c4043] mt-8">
            <button className="h-9 px-4 bg-[#f8f9fa] text-sm rounded-md border border-[#f8f9fa] hover:border-[#dadce0] hover:shadow-c2" onClick={handleGoogleSearch}>
              Google Search
            </button>
            <button className="h-9 px-4 bg-[#f8f9fa] text-sm rounded-md border border-[#f8f9fa] hover:border-[#dadce0] hover:shadow-c2">
              I'm Feeling Lucky
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
