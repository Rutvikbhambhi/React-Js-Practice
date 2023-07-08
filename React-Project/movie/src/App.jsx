import React from "react";

import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { fetchDataFromApi } from "./utils/api";

import { useSelector, useDispatch } from 'react-redux';
// import { getApiConfiguration } from './store/homeSlice';
import { getApiConfiguration } from './store/homeSlice';

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./Pages/home/Home";
import Details from "./Pages/details/Details";
import SearchResult from "./Pages/searchResult/SearchResult";
import Explore from "./Pages/explore/Explore";
import PageNotFound from "./Pages/404/PageNotFound";



getApiConfiguration

function App() {
  const dispatch = useDispatch();
  const { url } = useSelector((state) => state.home);
  console.log(url);

  useEffect(() => {
    apiTesting();
  }, []);

  const apiTesting = () => {
    fetchDataFromApi("/movie/popular")
      .then((res) => {
        console.log(res);
        dispatch(getApiConfiguration(res))
      });
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:mediaType/:id" element={<Details />} />
          <Route path="/search/:query" element={<SearchResult />} />
          <Route path="/explore/:mediaType" element={<Explore />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
      <Footer />
      {url?.total_pages}
    </div>
  )
}

export default App;
