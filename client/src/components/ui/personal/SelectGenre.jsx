import React from "react";
import { Box } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { fetchDataByGenre } from "../../../store/index.js";

export default function SelectGenre({ genres, type }) {
  const dispatch = useDispatch();
  return (
    <Box width={"90%"} ml={"20px"} mt={5}>
      <select
        onChange={(e) => {
          dispatch(fetchDataByGenre({ genres, genre: e.target.value, type }));
        }}
      >
        {genres.map((genre) => {
          return (
            <option key={genre.id} value={genre.id}>
              {genre.name}
            </option>
          );
        })}
      </select>
    </Box>
  );
}
