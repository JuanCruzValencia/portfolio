import { Flex, Box, Spacer, Link, Image } from "@chakra-ui/react";
import NextLink from "next/link";

export const Navbar = () => {
  return (
    <Flex
      align="center"
      justify="center"
      p={{base: "0", md: "10px 50px"}}
      borderBottom="1px solid #ffffff"
      maxH="50px"
    >
      <Box>
        <Image
          w="100%"
          maxH="40px"
          src="https://firebasestorage.googleapis.com/v0/b/my-portfolio-jcvv.appspot.com/o/Frame.svg?alt=media&token=c2351609-5563-4e3a-aa3c-fb3a0b932c0c"
          alt="logo_svg"
        />
      </Box>
      <Spacer />
      <Box display="flex" gap="1.5rem" fontSize="1.1em">
        <NextLink href="#projects">
          <Link color="#bbe5ed" _hover={{ color: "#ba1e68" }}>
            Projects
          </Link>
        </NextLink>
        <NextLink href="#about">
          <Link color="#bbe5ed" _hover={{ color: "#ba1e68" }}>
            About
          </Link>
        </NextLink>
        <NextLink href="#contact">
          <Link color="#bbe5ed" _hover={{ color: "#ba1e68" }}>
            Contact
          </Link>
        </NextLink>
      </Box>
    </Flex>
  );
};
