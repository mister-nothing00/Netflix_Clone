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
    <Box width={"auto"} >
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

{
  /* <Image
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

      
      <Box
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        bgGradient="linear(to-b, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3))"
        zIndex="1"
      />
      <Box
        position="absolute"
        bottom="5%"
        left="5%"
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
            color="white"
            _hover={{ bgColor: "gray.800" }}
            onClick={() => navigate("/player")}
            leftIcon={<FaPlay />}
          >
            Play
          </Button>
          <Button
            fontWeight={"bold"}
            fontSize={"sm"}
            bgColor={"red.600"}
            color={"white"}
            border={"none"}
            size="md"
            variant="outline"
            width={"100px"}
            _hover={{ bgColor: "red.700" }}
            leftIcon={<AiOutlineInfoCircle />}
          >
            Info
          </Button>
        </Flex>
      </Box> */
}
