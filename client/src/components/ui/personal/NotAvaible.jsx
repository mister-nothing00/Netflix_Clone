import { Text } from "@chakra-ui/react";
import React from "react";

export default function NotAvaible() {
  return (
    <>
      <Text color={"red"} fontFamily={"Inter"} fontSize={"6xl"}>
        No Movies Avaible fro selected genre
      </Text>
    </>
  );
}
