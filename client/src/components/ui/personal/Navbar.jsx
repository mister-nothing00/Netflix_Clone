import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  Link,
  VStack,
} from "@chakra-ui/react";
import logo from "../../../assets/netflix.png";
import { Link as RouterLink } from "react-router-dom";
import { FaPowerOff, FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { signOut } from "firebase/auth";
import { firebaseAuth } from "../../../utils/firebase-config";

function Navbar({ isScrolled }) {
  const links = [
    { name: "Home", link: "/" },
    { name: "Tv", link: "/tv" },
    { name: "Movies", link: "/movies" },
    { name: "Prefered", link: "/mylist" },
  ];

  const [showSearch, setShowSearch] = useState(false);
  const [isToggled, setIsToggled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 756);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <nav>
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
          px={4}
          width={"100%"}
        >
          <Flex alignItems={"center"} width={"50%"}>
            <Image src={logo} alt="logo image" width={"120px"} me={4} />
            {!isMobile && (
              <Box as={"ul"} display={"flex"} gap={2}>
                {links.map(({ name, link }, index) => (
                  <li key={index}>
                    <Link
                      as={RouterLink}
                      to={link}
                      color={"gray.500"}
                      fontFamily={"Inter"}
                      fontSize={"lg"}
                      transform={"scale(0.7)"}
                      transition={"all 0.3s ease"}
                      _hover={{
                        textDecoration: "none",
                        transform: "scale(0.9)",
                        transition: "all 0.3s ease",
                      }}
                    >
                      {name}
                    </Link>
                  </li>
                ))}
              </Box>
            )}
          </Flex>
          <Flex justifyContent={"flex-end"} alignItems={"center"} width={"50%"}>
            <Button
              bgColor={"transparent"}
              color={"white"}
              size={"xs"}
              onClick={() => setShowSearch((prev) => !prev)}
            >
              <FaSearch />
            </Button>
            {showSearch && (
              <Input
                type="text"
                placeholder="Search"
                size="xs"
                ml={2}
                width={"250px"}
                border={"none"}
                variant={"flushed"}
                color={"black"}
                borderColor={"gray.400"}
              />
            )}
            <Button
              bgColor={"transparent"}
              color={"red"}
              size="xs"
              rounded={"full"}
              onClick={() => signOut(firebaseAuth)}
            >
              <FaPowerOff />
            </Button>
            {isMobile && (
              <Button
                onClick={() => setIsToggled((prev) => !prev)}
                colorScheme="white"
                variant="outline"
                ml={2}
              >
                {isToggled ? <FaTimes /> : <FaBars />}
              </Button>
            )}
          </Flex>
        </Box>
        {isMobile && isToggled && (
          <Box
            position="sticky"
            bg="white"
            boxShadow="lg"
            zIndex="1000"
            p={4}
            width={"50%"}
            mx={"auto"}
            rounded={"md"}
          >
            <VStack spacing={4} align="stretch">
              <Box
                as={"ul"}
                display={"flex"}
                flexDirection={"row"}
                justifyContent={"center"}
                gap={4}
                spacing={2}
              >
                {links.map(({ name, link }, index) => (
                  <li key={index}>
                    <Link
                      as={RouterLink}
                      to={link}
                      color={"gray.500"}
                      fontFamily={"Inter"}
                      fontSize={"sm"}
                      mb={4}
                      onClick={() => setIsToggled(false)}
                      _hover={{color:"black", fontWeight:"semibold", textDecoration:"none" }}
                    >
                      {name}
                    </Link>
                  </li>
                ))}
              </Box>
              <Input
                type="text"
                placeholder="Search"
                size="sm"
                onChange={(e) => setSearchTerm(e.target.value)}
                value={searchTerm}
                borderColor={"gray.400"}
                variant={"flushed"}
                mb={4}
               color={"gray"}
              />
              <Button
                size={"xs"}
                width={"auto"}
                rounded={"50%"}
                mx={"auto"}
                onClick={() => {
                  signOut(firebaseAuth);
                  setIsToggled(false);
                }}
                _hover={{background:"red", color:"black", border:"none", boxShadow:"2xl", transform:"scale(0.9)", transition:"all 0.3s ease", }}
              >
                <FaPowerOff /> 
              </Button>
            </VStack>
          </Box>
        )}
      </nav>
    </>
  );
}

export default Navbar;
