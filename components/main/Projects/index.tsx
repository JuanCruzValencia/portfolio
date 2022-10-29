import { Box, Flex, Image, Text, Button, Heading } from "@chakra-ui/react";
import NextLink from "next/link";

export const Projects = () => {
  return (
    <Flex>
      <Heading>Projects</Heading>
      <Box>
        <Heading>Balto&aposs Shop</Heading>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          cumque impedit, similique repellendus delectus corrupti nulla dolore
          vel inventore at reprehenderit tenetur exercitationem soluta molestiae
          magnam eius animi, ea id?
        </Text>
        <NextLink href="">
          <Button>View Project</Button>
        </NextLink>
      </Box>
      <Box>
        <Heading>Balto&aposs Shop</Heading>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          cumque impedit, similique repellendus delectus corrupti nulla dolore
          vel inventore at reprehenderit tenetur exercitationem soluta molestiae
          magnam eius animi, ea id?
        </Text>
        <NextLink href="">
          <Button>View Project</Button>
        </NextLink>
      </Box>
      <Box>
        <Heading>Balto&aposs Shop</Heading>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          cumque impedit, similique repellendus delectus corrupti nulla dolore
          vel inventore at reprehenderit tenetur exercitationem soluta molestiae
          magnam eius animi, ea id?
        </Text>
        <NextLink href="">
          <Button>View Project</Button>
        </NextLink>
      </Box>
    </Flex>
  );
};
