import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovies, getGenres } from "../store";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "../utils/firebase-config";
import { Box } from "@chakra-ui/react";
import Navbar from "../components/ui/personal/Navbar";
import Slider from "../components/ui/personal/Slider";
import NotAvaible from "../components/ui/personal/NotAvaible";
import SelectGenre from "../components/ui/personal/SelectGenre";

export default function TvShows() {
  const [isScrolled, setIsScrolled] = useState(false);
  const movies = useSelector((state) => state.netflix.movies);
  const genres = useSelector((state) => state.netflix.genres);
  const genresLoaded = useSelector((state) => state.netflix.genresLoaded);

  const navigate = useNavigate();
  const dispatch = useDispatch();


  
  useEffect(() => {
    dispatch(getGenres());
  }, []);



  useEffect(() => {
    if (genresLoaded) {
      dispatch(fetchMovies({ genres, type: "tv" }));
    }
  }, [genresLoaded]);

  const [user, setUser] = useState(undefined);

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) setUser(currentUser.uid);
    else navigate("/login");
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.pageYOffset === 0 ? false : true);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box bg={"black"} height={"100vh"} width={"100%"} color={"white"}>
      <Navbar isScrolled={isScrolled} />
      <Box display={"block"} width={"100%"} mx={"auto"} pt={20}>
        <SelectGenre genres={genres} type={"tv"} />
        {movies.length ? <Slider movies={movies} /> : <NotAvaible />}
      </Box>
    </Box>
  );
}
