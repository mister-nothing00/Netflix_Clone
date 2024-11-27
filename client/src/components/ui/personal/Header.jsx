import React from "react";
import logo from "../../../assets/logo.png";
import { Box, Button, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function Header(props) {
  const navigate = useNavigate();
  return (
    <Box
      position={"absolute"}
      top={0}
      left={0}
      width={"100%"}
      p={4}
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Image src={logo} alt="logo image" height={"40px"} />
      <Button
        onClick={() => navigate(props.login ? "/login" : "/register")}
        colorScheme="red"
        rounded={"2xl"}
        size={"sm"}
        bgColor={"red"}
      >
        {props.login ? "Log in" : "Sign in"}
      </Button>
    </Box>
  );
}
