import {
  Box,
  Flex,
  Heading,
  Image,
  List,
  ListItem,
  IconButton,
  Button,
} from "@chakra-ui/react";
import React, { useState } from "react";
import video from "../../../assets/video.mp4";
import { useNavigate } from "react-router-dom";
import { IoPlayCircleSharp } from "react-icons/io5";
import { RiThumbUpFill, RiThumbDownFill } from "react-icons/ri";
import { BsCheck } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";

export default function Card({ movieData, isLiked = false }) {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  return (
    <Box
      maxW="230px"
      position="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main Image */}
      <Image
        src={`https://image.tmdb.org/t/p/w500${movieData.image}`}
        alt="movie"
        borderRadius="md"
        objectFit="cover"
        cursor="pointer"
        onClick={() => navigate("/player")}
      />

      {isHovered && (
        <Box
          position="absolute"
          top="-18vh"
          left="0"
          zIndex="10"
          bg="blackAlpha.900"
          borderRadius="md"
          boxShadow="md"
          w="320px"
        >
          {/* Hover Container */}
          <Box position="relative">
            <Image
              src={`https://image.tmdb.org/t/p/w500${movieData.image}`}
              alt="movie"
              borderRadius="md"
              objectFit="cover"
              onClick={() => navigate("/player")}
              cursor="pointer"
            />
            <Box
              as="video"
              src={video}
              autoPlay
              loop
              muted
              position="absolute"
              top="0"
              left="0"
              w="100%"
              h="100%"
              borderRadius="md"
              objectFit="cover"
              cursor="pointer"
              onClick={() => navigate("/player")}
            />
          </Box>

          {/* Info Container */}
          <Flex direction="column" mt="4" px={2} pb={2} gap="2">
            <Heading
              fontSize="lg"
              color="white"
              onClick={() => navigate("/player")}
              cursor="pointer"
            >
              {movieData.name}
            </Heading>
            <Flex
              justify="space-between"
              align="center"
              color="gray.400"
              mt="2"
            >
              {/* Icons */}
              <Flex gap="4">
                <IoPlayCircleSharp
                  title="Play"
                  onClick={() => navigate("/player")}
                  cursor={"pointer"}
                  size={"18px"}
                />
                <RiThumbUpFill title="Like" size={"18px"} cursor={"pointer"} />
                <RiThumbDownFill
                  title="Dislike"
                  size={"18px"}
                  cursor={"pointer"}
                />

                {isLiked ? (
                  <BsCheck
                    title="Remove from List"
                    size={"18px"}
                    cursor={"pointer"}
                  />
                ) : (
                  <AiOutlinePlus
                    title="Add to List"
                    size={"18px"}
                    cursor={"pointer"}
                  />
                )}
              </Flex>
              {/* More Info */}
              <BiChevronDown
                title="More Info"
                size={"18px"}
                cursor={"pointer"}
              />
            </Flex>

            {/* Genres */}
            <Box
              display={"flex"}
              gap={2}
              fontFamily={"Roboto"}
              fontSize={"sm"}
              color="whiteAlpha.900"
              mt={2}
            >
              <ul>
                {movieData.genres.map((genre) => (
                  <li key={genre}>{genre}</li>
                ))}
              </ul>
            </Box>
          </Flex>
        </Box>
      )}
    </Box>
  );
}
