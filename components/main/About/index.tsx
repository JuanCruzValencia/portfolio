import {
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Divider,
  Stack,
  Highlight,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { IoReaderOutline } from "react-icons/io5";

export const About = () => {
  return (
    <Flex
      direction={{ base: "column", md: "row-reverse" }}
      id="about"
      gap={{ base: "1rem", md: "80px" }}
      p={{ base: "1rem", md: "4rem" }}
      h="100%"
      mt="10rem"
    >
      <Box display="flex" flexDirection="column" gap="3rem">
        <Stack
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Highlight
            query="a little"
            styles={{
              px: "2",
              py: "1",
              rounded: "full",
              bg: "purple.100",
              w: "77px",
              color: "#000000",
            }}
          >
            A LITTLE
          </Highlight>
          <Heading
            textAlign="center"
            color="#bbe5ed"
            fontSize="45px"
            fontWeight="600"
          >
            About me
          </Heading>
        </Stack>
        <Text textAlign="justify" fontSize="1.3em">
          I am a Full Stack Web Development student. I am passionate about
          creating and designing user-oriented digital experiences. I enjoy
          working with various technologies such as TypeScript, ReactJS, and
          TailwindCSS, among others. Every day, I strive to improve existing
          projects and embark on new ones to further enhance my skills. I have
          acquired my knowledge through self-study and by completing the Full
          Stack Developer course at CoderHouse. My ultimate goal is to work
          diligently in creating solutions and delivering seamless experiences,
          free from any issues or errors.
        </Text>
      </Box>
      <Divider orientation="vertical" color="#bbe5ed" />
      <Box maxW="100%" minW="fit-content">
        <Image
          src="https://firebasestorage.googleapis.com/v0/b/my-portfolio-jcvv.appspot.com/o/juan-cruz-valencia.jpg?alt=media&token=46db5410-decc-42fa-b125-3c6f9eda1cfb"
          alt="Juan Cruz Valencia"
          borderRadius="15px"
          maxH="400px"
          w="100%"
        />
      </Box>
    </Flex>
  );
};
