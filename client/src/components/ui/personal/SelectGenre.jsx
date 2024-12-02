import React from "react";
import { Box, Select } from "@chakra-ui/react";

export default function SelectGenre({ genres, type }) {
  return (
    <Box width={"90%"} ml={"20px"} mt={5}>
    <select>
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
