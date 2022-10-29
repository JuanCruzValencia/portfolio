import { Box, Flex, Text, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import styles from "./Footer.module.css"

export const Footer = () => {
  return (
    <Flex className={styles.footer}>
      <Box>
        <NextLink href="">
          <Link>instagram</Link>
        </NextLink>
        <NextLink href="">
          <Link>linkedIn</Link>
        </NextLink>
        <NextLink href="">
          <Link>GitHub</Link>
        </NextLink>
      </Box>
      <Box>
        <Text>Juan Cruz Valencia with love</Text>
      </Box>
    </Flex>
  );
};
