import { BrowserRouter, Routes, Route, json } from "react-router-dom";
import SearchPage from "./Pages/SearchPage";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { useState } from "react";
import MoviesPage from "./Pages/MoviesPage";
import OneMovieInfo from "./Pages/OneMovieInfo";
const App = () => {
  const [searchInput, setSearchInput] = useState();
  const [val, setVal] = useState(false);
  return (
    <div className="bg-[linear-gradient(#0b004e,#1d152f,#002834)]">
      <BrowserRouter>
        <Header
          searchInput={searchInput}
          setVal={setVal}
          setSearchInput={setSearchInput}
        />
        <Routes>
          <Route path="/" element={<MoviesPage />} />
          <Route path="/OneMovie/:name" element={<OneMovieInfo />} />
          <Route
            path="/search"
            element={
              <SearchPage val={val} setVal={setVal} searchInput={searchInput} />
            }
          />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;
