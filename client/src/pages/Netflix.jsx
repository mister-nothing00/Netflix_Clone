import React, { useEffect, useState } from "react";

import Navbar from "../components/ui/personal/Navbar";
import { Box } from "@chakra-ui/react";
import Hero from "../components/ui/personal/Hero";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies, getGenres } from "../store";
import Slider from "../components/ui/personal/Slider";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const genresLoaded = useSelector((state) => state.netflix.genresLoaded);
  const movies= useSelector((state)=> state.netflix.movies)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGenres());
  }, []);

  useEffect(() => {
    if (genresLoaded) dispatch(fetchMovies({ type: "all" }));
  }, []);

  window.onscroll = () => {
    setIsScrolled(window.pageXOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

 
  return (
    <>
      <Box  bgColor={"blackAlpha.950"} height={"auto"}>
        <Navbar isScrolled={isScrolled} />
        <Hero />
        <Slider movies={movies}/>
      </Box>
    </>
  );
}
