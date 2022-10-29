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

export const Hero = () => {
  return (
    <Flex>
      <Box>
        <Highlight query="front-end developer">front-end developer</Highlight>
        <Heading>Hello, my name is Juan Cruz</Heading>
        <Text>
          I love to create beautiful and clean digital experiences. I like to
          work with different technologies as React, Next and SASS among others.
        </Text>
        <Stack>
          <Button>Projects</Button>
          <Button>LinkedIn</Button>
        </Stack>
      </Box>
      <Box>
        <Image
          src=""
          alt="Juan Cruz Valencia"
        />
      </Box>
    </Flex>
  );
};
