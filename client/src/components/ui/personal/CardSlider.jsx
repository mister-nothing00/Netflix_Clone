import React from "react";
import Card from "./Card";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { Box } from "@chakra-ui/react";


export default function CardSlider({ data, title }) {
  return (
    <>
    <Box display={"flex"}>
      {data.map((movie, index) => {
        return <Card movieData={movie} index={index} key={movie.id} />;
      })}
      </Box>
    </>
  );
}
