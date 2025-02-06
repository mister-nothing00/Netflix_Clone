import { Box, Button, Image, Flex } from "@chakra-ui/react";
import React from "react";
import bgImage from "../../../assets/home.jpg";
import MovieLogo from "../../../assets/homeTitle.webp";
import { FaPlay } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();
  return (
    <Box>
      <Image
        src={bgImage}
        alt="Background"
        objectFit="cover"
        width="100%"
        height="100vh"
        filter="brightness(70%)"
      />

      <Box position="absolute" bottom="5rem" width="100%" px="5rem">
        {/* Movie Logo */}
        <Box mb="5rem">
          <Image src={MovieLogo} alt="Movie Logo" />
        </Box>
        {/* Buttons */}
        <Flex gap="2rem">
          <Button
            onClick={() => navigate("/player")}
            bg="white"
            color="black"
            fontSize="lg"
            size={"sm"}
            rounded={"lg"}
            display="flex"
            alignItems="center"
            _hover={{ opacity: 0.8 }}
          >
            <FaPlay /> Play
          </Button>
          <Button
            bg="rgba(109, 109, 110, 0.7)"
            color="white"
            fontSize="lg"
            size={"sm"}
            rounded={"lg"}
            display="flex"
            alignItems="center"
            _hover={{ opacity: 0.7 }}
          >
            <AiOutlineInfoCircle /> More Info
          </Button>
        </Flex>
      </Box>
    </Box>
  );
}
