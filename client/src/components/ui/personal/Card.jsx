import {
  Box,
  Flex,
  Heading,
  Image,
  List,
  ListItem,
  Text,
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
    <>
      <Box
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Image
          src={`https://image.tmdb.org/t/p/w500${movieData.image}`}
          alt="movie"
        />

        {isHovered && (
          <Box>
            <Flex>
              <Image
                src={`https://image.tmdb.org/t/p/w500${movieData.image}`}
                alt="movie"
                onClick={() => navigate("/player")}
              />
              <video
                src={video}
                autoPlay
                loop
                muted
                onClick={() => navigate("/player")}
              ></video>
            </Flex>
            <Flex direction={"column"}>
              <Heading fontFamily={"Inter"} onClick={() => navigate("/player")}>
                {movieData.name}
              </Heading>
              <Box display={"flex"} justifyContent={"space-between"}>
                <IoPlayCircleSharp
                  title="play"
                  onClick={() => navigate("/player")}
                />
                <RiThumbUpFill title="Like" />
                <RiThumbDownFill title="Dislike" />
                {isLiked ? (
                  <BsCheck title="Remove from List" />
                ) : (
                  <AiOutlinePlus title="Add to List" />
                )}
                <Box>
                  <BiChevronDown title="More info" />
                </Box>
                <Box display={"flex"}>
                  <ul>
                  {movieData.genres.map((genre) => {
                        return <li key={genre.id}>{genre.name}</li>;
                      })}
                  </ul>
                </Box>
              </Box>
            </Flex>
          </Box>
        )}
      </Box>
    </>
  );
}
