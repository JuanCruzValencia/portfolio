import {
  Box,
  Flex,
  Image,
  Text,
  Button,
  Heading,
  Divider,
  Highlight,
  Stack,
  Badge,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { projects } from "../../../projects/db";

export const Projects = () => {
  return (
    <Flex direction="column" id="projects" gap="3rem" mt="10rem">
      <Stack
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Highlight
          query="work"
          styles={{
            px: "2",
            py: "1",
            rounded: "full",
            bg: "purple.100",
            w: "63px",
            color: "#000000",
          }}
        >
          WORK
        </Highlight>
        <Heading
          textAlign="center"
          color="#bbe5ed"
          fontSize="45px"
          fontWeight="600"
        >
          Some of my projects
        </Heading>
      </Stack>
      {projects.map((project) => {
        return (
          <Flex
            direction={{ base: "column", md: "row" }}
            maxW="100%"
            gap="3rem"
            p={2}
            key={project.title}
            justifyContent="center"
            alignItems="center"
            mt="2rem"
          >
            <Box
              maxW="500px"
              display="flex"
              flexDirection="column"
              gap="1rem"
              justifyContent="space-evenly"
            >
              <Divider />
              <Heading fontSize="25px" color="#bbe5ed">
                {project.title}
              </Heading>
              <Stack direction="row">
                {project.techs.map((tech) => {
                  return <Badge key={tech}>{tech}</Badge>;
                })}
              </Stack>
              <Text textAlign="justify">{project.description}</Text>
              <Flex direction="row" justify="center" align="center" gap="1rem">
                <Button
                  bg="#5643fd"
                  _hover={{ bg: "#ba1e68" }}
                  color="#ffffff"
                  w="80px"
                  minH="40px"
                  mt="0px"
                >
                  <NextLink href={project.url} target="_blank">
                    GitHub
                  </NextLink>
                </Button>
                <Button
                  bg="#5643fd"
                  _hover={{ bg: "#ba1e68" }}
                  color="#ffffff"
                  w="80px"
                  minH="40px"
                  mt="0px"
                >
                  <NextLink href={project.deploy} target="_blank">
                    Deploy
                  </NextLink>
                </Button>
              </Flex>
            </Box>
            <Box>
              <Image
                src={project.image}
                alt={project.title}
                objectFit="contain"
                w="100%"
                maxH="250"
              />
            </Box>
          </Flex>
        );
      })}
    </Flex>
  );
};
