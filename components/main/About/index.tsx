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
      direction="row-reverse"
      id="about"
      gap="80px"
      mt="150px"
      p="4rem"
      h="530px"
    >
      <Box display="flex" flexDirection="column" gap="3rem">
        <Stack
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Highlight
            query="some"
            styles={{
              px: "2",
              py: "1",
              rounded: "full",
              bg: "purple.100",
              w: "61px",
              color: "#000000",
            }}
          >
            SOME
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
        <Text textAlign="justify">
          I am a student of Full Stack Web Development, I love creating and
          designing features and user-oriented digital experiences. I like to
          work with different technologies like JavaScript, ReactJS and CSS/SASS
          among others. Every day I work on improving the projects created and
          on new ones to continue learning. I acquired my knowledge studying in
          a self-taught way and at CoderHouse&apos;s FullStack Developer course.
          My goal is to be able to work day by day creating solutions and
          providing a satisfactory experience without problems or errors.
        </Text>
        <Button
          bg="#5643fd"
          _hover={{ bg: "#ba1e68" }}
          size="md"
          color="#ffffff"
          alignSelf="center"
          minH="40px"
        >
          <NextLink href="">Resume</NextLink>
        </Button>
      </Box>
      <Divider orientation="vertical" color="#bbe5ed" />
      <Box maxW="500px" minW="fit-content">
        <Image
          src="https://firebasestorage.googleapis.com/v0/b/my-portfolio-jcvv.appspot.com/o/juan-cruz-valencia.jpg?alt=media&token=46db5410-decc-42fa-b125-3c6f9eda1cfb"
          alt="Juan Cruz Valencia"
          borderRadius="15px"
          h="400px"
          w="100%"
        />
      </Box>
    </Flex>
  );
};
