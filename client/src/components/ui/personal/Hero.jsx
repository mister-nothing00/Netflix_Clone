import { Box, Button, Image, Flex } from "@chakra-ui/react";
import React from "react";
import bgImage from "../../../assets/home.jpg";
import MovieLogo from "../../../assets/homeTitle.webp";
import { FaPlay } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";

export default function Hero() {
  return (
    <Box position={"relative"} width="100%" height="100vh">
      <Image
        src={bgImage}
        alt="Background"
        objectFit="cover"
        width="100%"
        height="100%"
        position="absolute"
        top="0"
        left="0"
        zIndex="0"
      />

      {/* Sovrapposizione sfumata sopra l'immagine */}
      <Box
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        zIndex="1"
      />

      {/* Contenuto principale del componente Hero */}
      <Box
        position="absolute"
        bottom="5%"
        left="5%"
        textAlign="left"
        zIndex="2"
        color="white"
      >
        <Image src={MovieLogo} alt="Movie Logo" mb={4} maxWidth="50%" />

        <Flex justifyContent="flex-start" gap={4} flexDirection="row">
          <Button
            fontFamily={"Inter"}
            bgColor={"black"}
            size="md"
            variant="solid"
            width={"100px"}
          >
            <FaPlay /> Play
          </Button>
          <Button
            fontWeight={"bold"}
            fontSize={"sm"}
            bgColor={"red.600"}
            color={"black"}
            border={"transparent"}
            size="md"
            variant="outline"
            width={"100px"}
          >
            <AiOutlineInfoCircle /> Info
          </Button>
        </Flex>
      </Box>
    </Box>
  );
}
