import { Box } from "@chakra-ui/react";
import { BsArrowLeft } from "react-icons/bs";
import video from "../../../assets/video.mp4";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Player() {
  const navigate = useNavigate();
  return (
    <>
      <Box bg={"black"} width={"100%"} mx={"auto"}>
        <Box
          color="white"
          width={"90%"}
          mx={"auto"}
          py={4}
          display="flex"
          justifyContent="flex-start"
          _hover={{
            transform: "translateX(-30px)",
            transition: "transform 0.3s ease-in-out",
          }}
        >
          <BsArrowLeft onClick={() => navigate(-1)} size={"20px"} />
        </Box>

        <Box
          display={"block"}
          width={"90%"}
          mx={"auto"}
          rounded={"md"}
          overflow={"hidden"}
          my={1}
        >
          <video src={video} autoPlay loop controls muted></video>
        </Box>
      </Box>
    </>
  );
}
