import { Box, Grid, GridItem, Heading } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovies, getGenres, getUsersLikedMovies } from "../store";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "../utils/firebase-config";
import Navbar from "../components/ui/personal/Navbar";
import Slider from "../components/ui/personal/Slider";
import NotAvaible from "../components/ui/personal/NotAvaible";
import SelectGenre from "../components/ui/personal/SelectGenre";
import Card from "../components/ui/personal/Card";

export default function UserListedMovies() {
  const [isScrolled, setIsScrolled] = useState(false);
  const movies = useSelector((state) => state.netflix.movies);
  const genres = useSelector((state) => state.netflix.genres);
  const genresLoaded = useSelector((state) => state.netflix.genresLoaded);
  const [email, setEmail] = useState(undefined);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (currentUser) => {
      if (currentUser) {
        setEmail(currentUser.email);
      } else {
        navigate("/login");
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  useEffect(() => {
    if (email) {
      dispatch(getUsersLikedMovies(email));
    }
  }, []);

  useEffect(() => {
    if (genresLoaded) {
      dispatch(fetchMovies({ genres, type: "movie" }));
    }
  }, [genresLoaded]);

  const [user, setUser] = useState(undefined);

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
    <>
       <Box bg={"black"} width={"100%"} height={"auto"} pb={10} position={"relative"} zIndex={0}>
        <Box display={"flex"} flexDirection={"column"} width={"90%"} mx={"auto"}>
          <Navbar isScrolled={isScrolled} />
          <Heading color={"white"} position={"relative"} zIndex={1000} mt={"100px"}>My List</Heading>
          <Grid templateColumns="repeat(4, 1fr)" gap={6} mt={4}>
            {movies.map((movie, index) => {
              return (
                <GridItem key={movie.id}>
                  <Card
                    movieData={movie}
                    index={index}
                    isLiked={true}
                  />
                </GridItem>
              );
            })}
          </Grid>
        </Box>
      </Box>
    </>
  );
}