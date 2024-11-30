import { Box } from "@chakra-ui/react";
import { BsArrowLeft } from "react-icons/bs";
import video from "../../../assets/video.mp4";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Player() {
  const navigate = useNavigate();
  return (
    <>
      <Box bg={"black"} width={"100%"} height={"100vh"} mx={"auto"} py={5}>
        <Box
          color="white"
          width={"90%"}
          mx={"auto"}
          py={4}
          display="flex"
          justifyContent="flex-start"
          _hover={{
            transform: "translateX(-20px)",
            transition: "transform 0.3s ease-in-out",
          }}
          position={"absolute"}
          top={8}
          left={"90px"}
          zIndex={"1000"}
        >
          <BsArrowLeft onClick={() => navigate(-1)} size={"20px"} />
        </Box>

        <Box
          display={"flex"}
          width={"90%"}
          height={"90vh"}
          mx={"auto"}
          rounded={"md"}
          overflow={"hidden"}
          my={1}
          position={"relative"}
        >
          <video
            src={video}
            loop
            controls
            muted
            style={{ width: '100%', height: '100%' }}
          ></video>
        </Box>
      </Box>
    </>
  );
}