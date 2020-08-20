import React, { useState, useEffect } from "react";
import Axios from "axios";

import { auth } from "./config";
import { InputForm } from "./components/form";
import { ImageList } from "./components/images";
import { CustomPagination } from "./common/constant/paginate";
import { Spinner } from "./common/Spinner";

export const App = () => {
  const [data, setData] = useState({});
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("hello");
  const [counter, setCounter] = useState(1);

  const getImages = async (query) => {
    const URL = `https://api.unsplash.com/search/photos/?page=${counter}&per_page=12&query=${query}&orientation=landscape&client_id=${auth.client_id}`;
    try {
      const res = await Axios.get(URL);
      setData(res.data);
      setImages(res.data.results);
    } catch (err) {
      console.log("Error fetching images", err);
    }
  };

  useEffect(() => {
    getImages(query);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [counter]);

  const handleChange = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
    getImages(query);
  };

  const handleClick = (e) => {
    e.preventDefault();
    getImages(query);
  };

  console.log(images);
  return (
    <div className="App">
      <InputForm handleChange={handleChange} handleClick={handleClick} />

      {images && <ImageList images={images} />}

      <CustomPagination data={data} setCounter={setCounter} />
    </div>
  );
};
