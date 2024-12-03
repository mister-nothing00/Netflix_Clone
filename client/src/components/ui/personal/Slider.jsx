import React from "react";
import CardSlider from "./CardSlider";
import { Box, Text } from "@chakra-ui/react";

export default function Slider({ movies }) {
  const getMoviesFromRange = (from, to) => {
    return movies.slice(from, to);
  };

  return (
    <>
      {movies?.length > 0 ? (
        <Box w="100%" p={0} m={0} bg="black" color="white">
          <CardSlider title="Trending Now" data={getMoviesFromRange(0, 10)} />
          <CardSlider title="New Releases" data={getMoviesFromRange(10, 20)} />
          <CardSlider
            title="Blockbuster Movies"
            data={getMoviesFromRange(20, 30)}
          />
          <CardSlider
            title="Popular on Netflix"
            data={getMoviesFromRange(30, 40)}
          />
          <CardSlider title="Action Movies" data={getMoviesFromRange(40, 50)} />
          <CardSlider title="Epics" data={getMoviesFromRange(50, 60)} />
        </Box>
      ) : (
        <Box textAlign="center" mt={8}>
          <Text fontSize="xl" color="gray.500">
            No movies available.
          </Text>
        </Box>
      )}
    </>
  );
}
