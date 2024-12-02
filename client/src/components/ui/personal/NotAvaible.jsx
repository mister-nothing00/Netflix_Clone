import { Box, Text } from "@chakra-ui/react";
import React from "react";

export default function NotAvaible() {
  return (
    <>
    <Box width={"90%"} mx={"auto"} >
      <Text textAlign={"center"} color={"red"} mt={20} fontFamily={"Inter"} fontSize={"6xl"}>
        No Movies Avaible for selected genre
      </Text>
      </Box>
    </>
  );
}
