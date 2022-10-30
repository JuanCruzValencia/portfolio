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
    <Flex direction="column" id="projects" gap="100px" mt="150px">
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
          <Flex maxW="1000px" maxH="300px" gap="3rem" p={2} key={project.title}>
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
              <Button
                bg="#5643fd"
                _hover={{ bg: "#ba1e68" }}
                color="#ffffff"
                w="80px"
                alignSelf="center"
                minH="40px"
              >
                <NextLink href={project.url}>GitHub</NextLink>
              </Button>
            </Box>
            <Box>
              <Image
                src={project.image}
                alt={project.title}
                objectFit="contain"
                maxW="500px"
              />
            </Box>
          </Flex>
        );
      })}
    </Flex>
  );
};
