import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Image,
  Flex,
  Heading,
  Button,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

import { RiThumbUpFill, RiThumbDownFill } from "react-icons/ri";
import { BiChevronDown } from "react-icons/bi";
import { BsCheck } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { IoPlayCircleSharp } from "react-icons/io5";

import { useDispatch } from "react-redux";
import video from "../../../assets/video.mp4";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "../../../utils/firebase-config";

export default React.memo(function Card({ index, movieData, isLiked = false }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isHovered, setIsHovered] = useState(false);
  const [email, setEmail] = useState(undefined);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cardRef = useRef(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (currentUser) => {
      if (currentUser) {
        setEmail(currentUser.email);
      } else {
        navigate("/login");
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  const handleNavigate = () => navigate("/player");

  // Gestione dell'hover in modo che non chiuda la card se si clicca sugli elementi
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = (e) => {
    if (!cardRef.current || !cardRef.current.contains(e.relatedTarget)) {
      setIsHovered(false);
    }
  };

  return (
    <Box
      ref={cardRef}
      maxW="230px"
      w="230px"
      h="100%"
      position="relative"
      cursor="pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Immagine di base per la card */}
      <Image
        src={`https://image.tmdb.org/t/p/w500${movieData.image}`}
        alt="card"
        borderRadius="0.2rem"
        w="100%"
        h="100%"
        zIndex="0"
        onClick={handleNavigate}
      />

      {isHovered && (
        <Box
          position="absolute"
          top="-18vh"
          left="0"
          w="20rem"
          borderRadius="0.3rem"
          bg="gray.900"
          boxShadow="rgba(0, 0, 0, 0.75) 0px 3px 10px"
          zIndex="99"
         
          transition="0.3s ease-in-out"
        >
          <Box position="relative" h="140px" mb="1rem">
            {/* Video che appare al passaggio del mouse */}
            <video
              src={video}
              autoPlay
              loop
              muted
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "0.3rem",
                border: "none",
              }}
              onClick={handleNavigate}
            />
          </Box>

          <Flex direction="column" gap={2} p={2}>
            <Heading
              size="lg"
              color="whiteAlpha.800"
              _hover={{ cursor: "pointer" }}
              onClick={handleNavigate}
            >
              {movieData.name}
            </Heading>

            <Flex justify="space-between" align="center">
              <Flex gap="1rem" >
                <Button size={"2xs"} variant="solid" color="gray.400" _hover={{color:"white", transform:"scale(1.1)"}} onClick={handleNavigate}>
                  <IoPlayCircleSharp />
                </Button>
                <Button size={"2xs"} variant="solid" color="gray.400" _hover={{color:"white", transform:"scale(1.1)"}}>
                  <RiThumbUpFill />
                </Button>
                <Button size={"2xs"} variant="solid" color="gray.400" _hover={{color:"white", transform:"scale(1.1)"}}>
                  <RiThumbDownFill />
                </Button>
                <Button size={"2xs"} variant="solid" color="gray.400" _hover={{color:"white", transform:"scale(1.1)"}}>
                  {isLiked ? <BsCheck /> : <AiOutlinePlus />}
                </Button>
              </Flex>
              <Button size={"2xs"} bg={"transparent"}  color="gray" _hover={{color:"white", transform:"scale(1.1)"}} onClick={onOpen}>
                <BiChevronDown />
              </Button>
            </Flex>

            <Flex>
              <ul style={{ display: "flex", gap: "1rem", padding: 0 }}>
                {movieData.genres.map((genre, index) => (
                  <li key={index} style={{ listStyleType: "none" }}>
                    <Text fontFamily={"Inter"} fontSize={"sm"} color="gray.400">{genre}</Text>
                  </li>
                ))}
              </ul>
            </Flex>
          </Flex>
        </Box>
      )}
    </Box>
  );
});
