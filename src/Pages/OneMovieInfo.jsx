import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { setRelatedData } from "../store/MovioSlice";
import LoadingSpinner from "../components/LoadingSpinner";

const OneMovieInfo = () => {
  const { state } = useLocation();
  const dispatch = useDispatch();
  const allmovieData = state?.allmovieData;
  const [loading, setLoading] = useState(false);
  const fetchData = async () => {
    setLoading(true)
    try {
      const url = `http://www.omdbapi.com/?t=${allmovieData?.Title}&apikey=723b198`;
      const response = await fetch(url);
      const json = await response.json();
      dispatch(setRelatedData(json));
    }
     catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (allmovieData?.Title) {
      fetchData();
    }
  }, []);

  const Data = useSelector((state) => state.movioData.relatedData);
if(loading){
  return <LoadingSpinner/>
}
  return (
    <div className="flex  flex-col  min-h-screen p-4 md:p-10">
      <div className="flex flex-col md:flex-row h-auto md:h-[80vh] gap-6">
        <div className="w-full md:w-1/2 flex flex-col items-center text-white">
          <img
            className="w-full max-w-xs md:max-w-sm lg:max-w-md h-[400px] object-contain rounded-lg"
            src={allmovieData?.Poster}
            alt={`Poster of ${allmovieData?.Title}`}
          />
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-center mt-4 capitalize">
            <span className="text-2xl md:text-3xl text-[#e5e7ebb8]">Title:</span> {allmovieData?.Title}
          </h1>
        </div>
        <div className="w-full md:w-1/2 flex flex-col text-white gap-4">
          <h3 className="text-lg md:text-xl lg:text-2xl font-semibold">
            <span className="text-xl md:text-2xl lg:text-3xl text-[#e5e7ebb8]">Actors:</span> {Data?.Actors}
          </h3>
          <h3 className="text-lg md:text-xl lg:text-2xl font-semibold">
            <span className="text-xl md:text-2xl lg:text-3xl text-[#e5e7ebb8]">Writer:</span> {Data?.Writer}
          </h3>
          <h3 className="text-lg md:text-xl lg:text-2xl font-semibold">
            <span className="text-xl md:text-2xl lg:text-3xl text-[#e5e7ebb8]">Director:</span> {Data?.Director}
          </h3>
          <h3 className="text-lg md:text-xl lg:text-2xl font-semibold">
            <span className="text-xl md:text-2xl lg:text-3xl text-[#e5e7ebb8]">Released:</span> {Data?.Released}
          </h3>
          <h3 className="text-lg md:text-xl lg:text-2xl font-semibold">
            <span className="text-xl md:text-2xl lg:text-3xl text-[#e5e7ebb8]">Awards:</span> {Data?.Awards}
          </h3>
          <h3 className="text-lg md:text-xl lg:text-2xl font-semibold">
            <span className="text-xl md:text-2xl lg:text-3xl text-[#e5e7ebb8]">Genre:</span> {Data?.Genre}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default OneMovieInfo;
