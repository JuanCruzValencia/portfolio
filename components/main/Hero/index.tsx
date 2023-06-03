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
    <Flex
      h="100%"
      gap="7rem"
      justify="center"
      mt="70px"
      w="100%"
      direction={{ base: "column", md: "row" }}
    >
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
          I am passionate about creating beautiful and clean digital
          experiences. I enjoy working with various technologies such as
          TypeScript, NextJS, and TailwindCSS, among others.
        </Text>
        <Stack spacing={4} direction="row" align="center" mt="10px">
          <NextLink href="https://github.com/JuanCruzValencia" target="_blank">
            <Button
              bg="#5643fd"
              _hover={{ bg: "#ba1e68" }}
              size="md"
              color="#ffffff"
            >
              Projects
            </Button>
          </NextLink>
          <NextLink
            href="https://www.linkedin.com/in/juan-cruz-valencia-vernengo-b91948241/"
            target="_blank"
          >
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
          src="/images/altumcode-zE007SNgcdE-unsplash.jpg"
          alt="Juan Cruz Valencia"
          boxSize="550px"
          borderRadius={10}
        />
      </Box>
    </Flex>
  );
};
