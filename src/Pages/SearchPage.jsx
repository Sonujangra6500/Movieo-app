import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBannerData } from "../store/MovioSlice";
import LoadingSpinner from "../components/LoadingSpinner";

const SearchPage = ({ searchInput, setVal, val }) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const FetchMoviesData = async () => {
    setLoading(true);
    try {
      const url = `http://www.omdbapi.com/?t=${searchInput}&apikey=723b198`;
      const response = await fetch(url);
      const json = await response.json();
      dispatch(setBannerData(json));
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (val) {
      FetchMoviesData();
      setVal(false);
    }
  }, [val]);

  const bannerData = useSelector((state) => state.movioData.bannerData);
if(loading){
  return <LoadingSpinner/>
}
  if (bannerData?.Title === "Undefined") {
    return (
      <div className="flex items-center justify-center h-[80vh] bg-black text-white">
        <h2 className="text-2xl md:text-3xl font-bold text-center">
          Search for your favorite movies in the search bar
        </h2>
      </div>
    );
  }

  if (bannerData?.Error) {
    return (
      <div className="flex items-center justify-center h-[80vh]  text-white">
        <h2 className="text-2xl md:text-3xl font-bold text-center">
          Movie details not found
        </h2>
      </div>
    );
  }

  return (
    <div className="flex flex-col  min-h-screen p-4 md:p-10">
      <div className="flex flex-col md:flex-row  h-auto md:h-[80vh] gap-6">
        <div className="w-full md:w-1/2 flex flex-col items-center text-white">
          <img
            className="w-full max-w-xs md:max-w-sm lg:max-w-md h-[400px] object-contain rounded-lg"
            src={bannerData?.Poster}
            alt={`Poster of ${bannerData?.Title}`}
          />
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-center mt-4 capitalize">
            <span className="text-2xl md:text-3xl text-[#e5e7ebb8]">Title:</span> {bannerData?.Title}
          </h1>
        </div>
        <div className="w-full md:w-1/2 flex flex-col text-white gap-4 mt-6 md:mt-0">
          <h3 className="text-lg md:text-xl lg:text-2xl font-semibold">
            <span className="text-xl md:text-2xl lg:text-3xl text-[#e5e7ebb8]">Actors:</span> {bannerData?.Actors}
          </h3>
          <h3 className="text-lg md:text-xl lg:text-2xl font-semibold">
            <span className="text-xl md:text-2xl lg:text-3xl text-[#e5e7ebb8]">Writer:</span> {bannerData?.Writer}
          </h3>
          <h3 className="text-lg md:text-xl lg:text-2xl font-semibold">
            <span className="text-xl md:text-2xl lg:text-3xl text-[#e5e7ebb8]">Director:</span> {bannerData?.Director}
          </h3>
          <h3 className="text-lg md:text-xl lg:text-2xl font-semibold">
            <span className="text-xl md:text-2xl lg:text-3xl text-[#e5e7ebb8]">Released:</span> {bannerData?.Released}
          </h3>
          <h3 className="text-lg md:text-xl lg:text-2xl font-semibold">
            <span className="text-xl md:text-2xl lg:text-3xl text-[#e5e7ebb8]">Awards:</span> {bannerData?.Awards}
          </h3>
          <h3 className="text-lg md:text-xl lg:text-2xl font-semibold">
            <span className="text-xl md:text-2xl lg:text-3xl text-[#e5e7ebb8]">Genre:</span> {bannerData?.Genre}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
