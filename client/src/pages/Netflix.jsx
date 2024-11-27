import React, { useState } from 'react'
import Navbar from '../components/ui/personal/Navbar';
import { Box } from '@chakra-ui/react';

export default function Home() {
  const [isScrolled, setIsScrolled]= useState(false)

  window.onscroll= ()=>{
    setIsScrolled(window.pageXOffset === 0 ? false : true);
    return ()=> (window.onscroll = null);
  }
  return (
    <>
    <Box bgColor={"blackAlpha.950"} height={"100vh"}>
      <Navbar isScrolled={isScrolled}/>
      </Box>
    </>
  )
}
