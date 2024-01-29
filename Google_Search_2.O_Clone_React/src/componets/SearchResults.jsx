import React, { useContext, useEffect, useState } from "react";
import SearchResultHeaders from "./SearchResultHeaders";
import Footer from "../pages/Footer";
import { useParams } from "react-router-dom";
import { fetchData } from "../utils/Api";
import SearchImageResult from "./SearchImageResult";
import SearchAllResult from "./SearchAllResult";
import { Context } from "../utils/ContextApi";

const SearchResults = () => {
  const [result, setResult] = useState();
  const { query, startIndex } = useParams();
  const  {imageSearch}  = useContext(Context);

  const fetchSearchResult = () => {
    let payload = { q: query, start: startIndex };
        if (imageSearch) {
            payload.searchType = "image";
        }
        fetchData(payload).then((res) => {
            console.log(res.data);
            setResult(res.data);
        });
  };

  useEffect(() => {
    fetchSearchResult();
  }, [query, startIndex, imageSearch]);

  if (!result) return;

  const { items, queries, searchInformation } = result;
  // console.log(searchInformation)

  return (
    <div className="flex flex-col min-h-[100vh]">
            <SearchResultHeaders />
            <main className="grow p-[12px] pb-0 md:pr-5 md:pl-20">
                <div className="flex text-sm text-[#70757a] mb-3">{`About ${searchInformation.formattedTotalResults} results in (${searchInformation.formattedSearchTime})`}</div>
                {!imageSearch ? (
                    <>
                        {items.map((item, index) => (
                            <SearchAllResult key={index} data={item} />
                        ))}
                    </>
                ) : (
                    <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-4">
                        {items.map((item, index) => (
                            <SearchImageResult
                                key={index}
                                data={item}
                            />
                        ))}
                    </div>
                )}
            </main>
            <Footer />
        </div>
  );
};

export default SearchResults;
