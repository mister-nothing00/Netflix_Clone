import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Flex,
  HStack,
  Image,
  Input,
  Link,
} from "@chakra-ui/react";
import logo from "../../../assets/netflix.png";
import { Link as RouterLink } from "react-router-dom";
import { FaPowerOff, FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { firebaseAuth } from "../../../utils/firebase-config";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const links = [
    { name: "Home", link: "/" },
    { name: "Tv", link: "/tv" },
    { name: "Movies", link: "/movies" },
    { name: "My List", link: "/mylist" },
  ];

  const [showSearch, setShowSearch] = useState(false);
  const [isToggled, setIsToggled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (!currentUser) navigate("/login");
  });

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
    <Box
      position="fixed"
      top="0"
      left="0"
      width="100%"
      zIndex="10"
      bg="rgba(0, 0, 0, 0)"
      _hover={{
        background: "rgba(0, 0, 0, 0.9)",
        transition: "background 0.4s ease-in-out",
      }}
      px={4}
      m={0}
    >
      <Flex
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        width="100%"
      >
        <Flex alignItems="center" width="50%">
          <Image src={logo} alt="logo" width="100px" me={4} />
          {!isMobile && (
            <Box as="ul" display="flex" gapX={4}>
              {links.map(({ name, link }, index) => (
                <li key={index}>
                  <Link
                    as={RouterLink}
                    to={link}
                    color={"gray"}
                    fontFamily={"Inter"}
                    fontSize={"sm"}
                    transform={"scale(1.0)"}
                    transition={"all 0.3s ease"}
                    _hover={{
                      color: "whiteAlpha.800",
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
        <Flex justifyContent="flex-end" alignItems="center" width="50%">
          {!isMobile && (
            <>
              <Button
                bg="transparent"
                color="whiteAlpha.800"
                onClick={() => setShowSearch((prev) => !prev)}
                size={"sm"}
              >
                <FaSearch />
              </Button>
              {showSearch && (
                <Input
                  type="text"
                  placeholder="Search"
                  htmlSize={"16px"}
                  size="sm"
                  ml={2}
                  width="80%"
                  color="gray.300"
                  variant={"flushed"}
                />
              )}
              <Button
                bg="transparent"
                color="red"
                onClick={() => signOut(firebaseAuth)}
                size={"sm"}
              >
                <FaPowerOff />
              </Button>
            </>
          )}
          {isMobile && (
            <Button
              onClick={() => setIsToggled((prev) => !prev)}
              colorScheme="gray"
              variant="outline"
              ml={2}
            >
              {isToggled ? <FaTimes /> : <FaBars />}
            </Button>
          )}
        </Flex>
      </Flex>
      {isMobile && isToggled && (
        <Box
          position="relative"
          width="100%"
          bg="white"
          py={2}
          px={4}
          zIndex="1"
          rounded={"md"}
          
        >
          <Flex direction={"column"} gap={1} justifyContent={"space-around"} alignItems="flex-start" >
            {links.map(({ name, link }, index) => (
              <Link
                key={index}
                as={RouterLink}
                to={link}
                color="gray.400"
                fontSize="sm"
                borderLeft={"2px solid"}
                borderColor={"red"}
                pl={1}
                mb={4}
                onClick={() => setIsToggled(false)}
                _hover={{
                  color: "black",
                  fontWeight: "semibold",
                  textDecoration: "none",
                }}
              >
                {name}
              </Link>
            ))}
            <Input
              type="text"
              placeholder="Search"
              size="sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              borderColor="gray.400"
              variant="flushed"
              mb={4}
              color="black"
            />
            <Button
              size="xs"
              width="auto"
              rounded="50%"
              mx="auto"
              onClick={() => {
                signOut(firebaseAuth);
                setIsToggled(false);
              }}
              _hover={{
                background: "red",
                color: "black",
                border: "none",
                boxShadow: "2xl",
                transform: "scale(0.9)",
                transition: "all 0.3s ease",
              }}
            >
              <FaPowerOff />
            </Button>
          </Flex>
        </Box>
      )}
    </Box>
  );
}

export default Navbar;
