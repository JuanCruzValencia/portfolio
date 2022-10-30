import {
  Box,
  Flex,
  Heading,
  Button,
  Link,
  Text,
  Highlight,
  Stack,
  Image,
} from "@chakra-ui/react";
import styles from "./Hero.module.css";
import NextLink from "next/link";

export const Hero = () => {
  return (
    <Flex h="100%" gap="7rem" justify="center" mt="70px" w="100%" direction={{base: "column", md: "row"}}>
      <Box
        className={styles.hero__info}
        display="flex"
        gap=".5rem"
        flexDirection="column"
        w="100%"
        maxW="500px"
        justifyContent="center"
      >
        <Highlight
          query="front-end developer"
          styles={{
            px: "2",
            py: "1",
            rounded: "full",
            bg: "blue.100",
            w: "165px",
            color: "#000000",
          }}
        >
          front-end developer
        </Highlight>
        <Heading className={styles.hero__infoTitle}>
          Hi, i&apos;m Juan Cruz
        </Heading>
        <Text fontSize="1.1em">
          I love to create beautiful and clean digital experiences. I like to
          work with different technologies as React, Next and SASS among others.
        </Text>
        <Stack spacing={4} direction="row" align="center" mt="10px">
          <NextLink href="https://github.com/JuanCruzValencia">
            <Button
              bg="#5643fd"
              _hover={{ bg: "#ba1e68" }}
              size="md"
              color="#ffffff"
            >
              Projects
            </Button>
          </NextLink>
          <NextLink href="https://www.linkedin.com/in/juan-cruz-valencia-vernengo-b91948241/">
            <Button
              bg="#5643fd"
              _hover={{ bg: "#ba1e68" }}
              size="md"
              color="#ffffff"
            >
              LinkedIn
            </Button>
          </NextLink>
        </Stack>
      </Box>
      <Box className={styles.hero__img}>
        <Image
          src="https://firebasestorage.googleapis.com/v0/b/my-portfolio-jcvv.appspot.com/o/nubelson-fernandes-jKL2PvKN8Q0-unsplash.jpg?alt=media&token=fc8b0005-714f-424d-9d61-111723749379"
          alt="Juan Cruz Valencia"
          boxSize="550px"
          borderRadius={10}
        />
      </Box>
    </Flex>
  );
};
