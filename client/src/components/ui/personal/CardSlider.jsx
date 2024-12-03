import React, { useRef, useState } from "react";
import Card from "./Card";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { Box, Heading, Flex, Button, useBreakpointValue } from "@chakra-ui/react";

export default function CardSlider({ data, title }) {
  const listRef = useRef();
  const [sliderPosition, setSliderPosition] = useState(0);
  const [showControls, setShowControls] = useState(false);

  const CARD_WIDTH = 400; // Larghezza della card
  const VISIBLE_CARDS = useBreakpointValue({ base: 1, md: 3, lg: 5 });
  const MAX_POSITION = Math.max(0, data.length - VISIBLE_CARDS);

  const handleDirection = (direction) => {
    let newSliderPosition = sliderPosition;

    if (direction === "left" && sliderPosition > 0) {
      newSliderPosition -= 1;
    }

    if (direction === "right" && sliderPosition < MAX_POSITION) {
      newSliderPosition += 1;
    }

    setSliderPosition(newSliderPosition);
    listRef.current.style.transform = `translateX(${CARD_WIDTH * newSliderPosition}px)`;
  };

  return (
    <Box
      position="relative"
      py={16}
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
      zIndex={0}
      width="100%"
    >
      {/* Titolo */}
      <Heading color="whiteAlpha.950" ml="50px" mb="16px">
        {title}
      </Heading>

      <Box position="relative">
        {/* Freccia Sinistra */}
        {showControls && sliderPosition > 0 && (
          <Button
            position="absolute"
            left="10px"
            top="50%"
            transform="translateY(-50%)"
            zIndex="200"
            variant="ghost"
            color="white"
            fontSize="2rem"
            onClick={() => handleDirection("left")}
            _hover={{ bg: "rgba(255, 255, 255, 0.2)" }}
            aria-label="Scroll Left"
          >
            <AiOutlineLeft />
          </Button>
        )}

        {/* Carosello */}
        <Flex
          ref={listRef}
          style={{
            transition: "0.3s ease-in-out",
            transform: `translateX(${-CARD_WIDTH * sliderPosition}px)`,
          }}
          ml="50px"
          gap="16px"
        >
          {data.map((movie, index) => (
            <Card movieData={movie} index={index} key={movie.id} />
          ))}
        </Flex>

        {/* Freccia Destra */}
        {showControls && sliderPosition < MAX_POSITION && (
          <Button
            position="absolute"
            right="10px"
            top="50%"
            transform="translateY(-50%)"
            zIndex="200"
            variant="ghost"
            color="white"
            fontSize="2rem"
            onClick={() => handleDirection("right")}
            _hover={{ bg: "rgba(255, 255, 255, 0.2)" }}
            aria-label="Scroll Right"
          >
            <AiOutlineRight />
          </Button>
        )}
      </Box>
    </Box>
  );
}