import React, { useEffect, useState } from "react";

import Navbar from "../components/ui/personal/Navbar";
import { Box } from "@chakra-ui/react";
import Hero from "../components/ui/personal/Hero";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getGenres } from "../store";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate=useNavigate();
  const dispatch=useDispatch();

  useEffect(()=>{
    dispatch(getGenres())
  }, [])


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
