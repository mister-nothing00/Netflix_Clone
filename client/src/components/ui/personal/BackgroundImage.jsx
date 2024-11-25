import React from "react";
import bgImage from "../../../assets/login.jpg";
import { Box, Image } from "@chakra-ui/react";

export default function BackgroundImage() {
  return (
    <Box height={"100vh"} width={"100%"} position="relative">
      <Image display={"block"} alt="" src={bgImage} height="100%" width="100%" objectFit="cover" />
      <Box 
        position="absolute" 
        top={0} 
        left={0} 
        height="100%" 
        width="100%" 
        backgroundColor="rgba(0, 0, 0, 0.5)" 
      />
    </Box>
  );
}