import React, { useState } from "react";

import Navbar from "../components/ui/personal/Navbar";
import { Box } from "@chakra-ui/react";
import Hero from "../components/ui/personal/Hero";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageXOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <>
      <Box position={"relative"} bgColor={"blackAlpha.950"} height={"100vh"}  >
        <Navbar isScrolled={isScrolled} />
        <Hero/>

      </Box>
    </>
  );
}
