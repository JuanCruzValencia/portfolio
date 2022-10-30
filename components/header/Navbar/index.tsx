import { Flex, Box, Spacer, Link, Image } from "@chakra-ui/react";
import NextLink from "next/link";

export const Navbar = () => {
  return (
    <Flex
      align="center"
      justify="center"
      p="10px 50px"
      borderBottom="1px solid #ffffff"
      maxH="50px"
    >
      <Box>
        <Image
          w="100%"
          h="50px"
          src="https://firebasestorage.googleapis.com/v0/b/my-portfolio-jcvv.appspot.com/o/Frame.svg?alt=media&token=a1833f6d-ebad-494e-a69f-d2f3f1f2bce8"
          alt="logo_svg"
        />
      </Box>
      <Spacer />
      <Box display="flex" gap="1.5rem">
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
