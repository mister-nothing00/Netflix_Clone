import React, { useEffect, useState } from "react";

import Navbar from "../components/ui/personal/Navbar";
import { Box } from "@chakra-ui/react";
import Hero from "../components/ui/personal/Hero";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies, getGenres } from "../store";
import Slider from "../components/ui/personal/Slider";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "../utils/firebase-config";

export default function Netflix() {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const genresLoaded = useSelector((state) => state.netflix.genresLoaded);
  const movies = useSelector((state) => state.netflix.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGenres());
  }, []);

  useEffect(() => {
    if (genresLoaded) {
      dispatch(fetchMovies({ type: "all" }));
    }
  }, [genresLoaded]);

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (!currentUser) navigate("/login");
  });

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <>
      <Box bgColor={"blackAlpha.950"} width={"100%"} height={"100%"}>
        <Navbar isScrolled={isScrolled} />
        <Box position={"relative"} width="100%" height="100vh">
          <Hero />
        </Box>
        <Slider movies={movies} />
      </Box>
    </>
  );
}
