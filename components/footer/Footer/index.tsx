import { Box, Flex, Text, Link, Icon } from "@chakra-ui/react";
import NextLink from "next/link";
import styles from "./Footer.module.css";
import { BsGithub, BsInstagram, BsLinkedin, BsHeart } from "react-icons/bs";

export const Footer = () => {
  return (
    <Flex className={styles.footer}>
      <Box className={styles.footer__icons}>
        <NextLink href="https://www.instagram.com/juancruzvalencia/">
          <Link>
            <Icon
              _hover={{ color: "#ba1e68" }}
              as={BsInstagram}
              color="#bbe5ed"
            />
          </Link>
        </NextLink>
        <NextLink href="https://www.linkedin.com/in/juan-cruz-valencia-vernengo-b91948241/">
          <Link>
            <Icon
              _hover={{ color: "#ba1e68" }}
              as={BsLinkedin}
              color="#bbe5ed"
            />
          </Link>
        </NextLink>
        <NextLink href="https://github.com/JuanCruzValencia">
          <Link>
            <Icon _hover={{ color: "#ba1e68" }} as={BsGithub} color="#bbe5ed" />
          </Link>
        </NextLink>
      </Box>
      <Box className={styles.footer__sign}>
        <Text>Juan Cruz Valencia with</Text>
        <Icon as={BsHeart} _hover={{ color: "#ba1e68" }} color="#bbe5ed" />
      </Box>
    </Flex>
  );
};
