import { Box, Grid, GridItem, Heading } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovies, getUsersLikedMovies } from "../store/index.js";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "../utils/firebase-config";
import Navbar from "../components/ui/personal/Navbar";
import Card from "../components/ui/personal/Card";

export default function UserListedMovies() {
  const movies = useSelector((state) => state.netflix.movies);
  const genres = useSelector((state) => state.netflix.genres);
  const genresLoaded = useSelector((state) => state.netflix.genresLoaded);
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) setEmail(currentUser.email);
    else navigate("/login");
  });

  useEffect(() => {
    if (email) {
      dispatch(getUsersLikedMovies(email));
    }
  }, [email]);

  useEffect(() => {
    if (genresLoaded) {
      dispatch(fetchMovies({ genres, type: "movie" }));
    }
  }, []);

  return (
    <>
      <Box
        bg={"black"}
        width={"100%"}
        height={"100vh"}
        pb={10}
        position={"relative"}
        zIndex={0}
      >
        <Box display={"flex"} flexDirection={"column"} width={"90%"} mx={"auto"}>
          <Navbar />
          <Heading color={"white"} position={"relative"} zIndex={3} mt={"100px"}>
            My List
          </Heading>
          {Array.isArray(movies) && movies.length > 0 ? (
            <Grid templateColumns="repeat(4, 1fr)" gap={6} mt={4}>
              {movies.map((movie, index) => {
                return (
                  <GridItem key={movie.id}>
                    <Card
                      movieData={movie}
                      index={index}
                      key={movie.id}
                      isLiked={true}
                    />
                  </GridItem>
                );
              })}
            </Grid>
          ) : (
            <Heading
              color={"white"}
              fontFamily={"Roboto"}
              my={"100px"}
              textAlign={"center"}
            >
              Nessun film inserito alla lista, aggiungine uno!
            </Heading>
          )}
        </Box>
      </Box>
    </>
  );
}
