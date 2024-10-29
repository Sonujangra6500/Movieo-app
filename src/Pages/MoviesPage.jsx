import { useDispatch } from "react-redux";
import { setAllmovieData } from "../store/MovioSlice";
import MoviesData from "./MoviesData";
import { useEffect, useState } from "react";
import LoadingSpinner from "../components/LoadingSpinner";

const MoviesPage = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const FetchMoviesData = async () => {
    setLoading(true)
    try {
      const url = `http://www.omdbapi.com/?s=movies&apikey=723b198`;
      const response = await fetch(url);
      const json = await response.json();
      dispatch(setAllmovieData(json));
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    FetchMoviesData();
  }, []);
if(loading){
  return <LoadingSpinner/>
}
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <MoviesData />
    </div>
  );
};

export default MoviesPage;
