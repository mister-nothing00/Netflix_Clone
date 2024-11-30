import React, { useState } from "react";
import { Box, Button, Flex, Heading, Input, Text } from "@chakra-ui/react";
import BackgroundImage from "../components/ui/personal/BackgroundImage";
import Header from "../components/ui/personal/Header";
import { firebaseAuth } from "../utils/firebase-config";
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(firebaseAuth, email, password);
    } catch (error) {
      console.log(error);
    }
  };

  onAuthStateChanged(firebaseAuth, (currentUser)=>{
    if(currentUser) navigate("/")
  })

  return (
    <Box
      display={"block"}
      height={"100vh"}
      width={"100%"}
      position={"relative"}
    >
      <BackgroundImage />
      <Header login />
      <Flex
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        width={"100%"}
        gap={"10px"}
        position={"absolute"}
        top={"50%"}
        left={"50%"}
        transform={"translate(-50%, -50%)"}
        color={"white"}
        textAlign={"center"}
        px={4}
      >
        <Heading
          fontFamily={"Inter"}
          fontSize={{ base: "2xl", md: "3xl" }}
          textAlign={"center"}
        >
          Unlimited movies, TV shows and more...
        </Heading>
        <Text
          fontFamily={"Roboto"}
          color={"gray.400"}
          fontSize={{ base: "md", md: "lg" }}
        >
          Watch anywhere. Cancel anytime.
        </Text>
        <Text
          fontFamily={"Roboto"}
          color={"gray.400"}
          fontSize={{ base: "md", md: "lg" }}
        >
          Ready to watch? Enter your email to create or restart your membership.
        </Text>

        <form onSubmit={handleSubmit}>
          <Box
            display={"flex"}
            flexDirection={{ base: "column", md: "row" }}
            width={"100%"}
            gap={5}
          >
            <Input
              type="email"
              placeholder="Email address"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              rounded={"2xl"}
              mb={{ base: 3, md: 0 }}
              border={"1.5px solid "}
              boxShadow={"lg"}
            />
            <Input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              rounded={"2xl"}
              mb={{ base: 3, md: 0 }}
              border={"1.5px solid "}
              boxShadow={"lg"}
            />
            <Button
              type="submit"
              fontFamily={"Inter"}
              size={"md"}
              rounded={"3xl"}
              width={{ base: "100%", md: "auto" }}
              bgColor={"red"}
              transform={"scale(0.8)"}
              transition={"all 0.3s ease"}
              _hover={{ transform: "scale(0.9)", transition: "all 0.3s ease" }}
            >
              Get started
            </Button>
          </Box>
        </form>
      </Flex>
    </Box>
  );
}
