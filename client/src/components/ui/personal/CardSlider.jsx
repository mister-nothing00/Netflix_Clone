import React, { useRef, useState } from "react";
import Card from "./Card";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { Box, Heading, Flex, Button } from "@chakra-ui/react";

export default function CardSlider({ data, title }) {
  const listRef = useRef();
  const [sliderPosition, setSliderPosition] = useState(0);
  const [showControls, setShowControls] = useState(false);

  const CARD_WIDTH = 230; // Larghezza di una card più eventuale gap
  const VISIBLE_CARDS = 5; // Numero di card visibili contemporaneamente
  const MAX_POSITION = Math.max(0, data.length - VISIBLE_CARDS); // Posizione massima consentita

  const handleDirection = (direction) => {
    let newSliderPosition = sliderPosition;

    if (direction === "left" && sliderPosition > 0) {
      newSliderPosition -= 1;
    }

    if (direction === "right" && sliderPosition < MAX_POSITION) {
      newSliderPosition += 1;
    }

    // Aggiorna lo stato e la trasformazione
    setSliderPosition(newSliderPosition);
    listRef.current.style.transform = `translateX(${-CARD_WIDTH * newSliderPosition}px)`;
  };

  return (
    <Box
      position="relative"
      padding="24px 0"
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      {/* Titolo */}
      <Heading color="whiteAlpha.950" ml="50px" mb="16px">
        {title}
      </Heading>

      <Box position="relative" overflow="hidden">
        {/* Freccia Sinistra */}
        {showControls && sliderPosition > 0 && (
          <Button
            position="absolute"
            left="10px"
            top="50%"
            transform="translateY(-50%)"
            zIndex="99"
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
          gap="1rem"
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
            zIndex="99"
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
