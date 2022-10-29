import { Flex, Box, Spacer, Link, Image } from "@chakra-ui/react";
import NextLink from "next/link";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <Flex className={styles.navbar} p="30px" borderBottom="1px solid #ffffff">
      <Box className={styles.navbar__img}>
        <Image
          src="https://firebasestorage.googleapis.com/v0/b/my-portfolio-jcvv.appspot.com/o/Frame.svg?alt=media&token=a1833f6d-ebad-494e-a69f-d2f3f1f2bce8"
          alt="logo_svg"
        />
      </Box>
      <Spacer />
      <Box className={styles.navbar__links}>
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
