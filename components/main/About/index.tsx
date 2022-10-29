import { Flex, Box, Heading, Text, Button, Image } from "@chakra-ui/react";
import NextLink from "next/link";

export const About = () => {
  return (
    <Flex>
      <Box>
        <Heading>About me</Heading>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          quaerat alias laborum, eum beatae dicta maiores ducimus harum nam
          deserunt vero, voluptas fugit, fuga ab quod sit minima ratione
          corporis.
        </Text>
        <NextLink href="">
          <Button>Resume</Button>
        </NextLink>
      </Box>
      <Box>
        <Image src="https://firebasestorage.googleapis.com/v0/b/my-portfolio-jcvv.appspot.com/o/juan-cruz-valencia.jpg?alt=media&token=46db5410-decc-42fa-b125-3c6f9eda1cfb" alt="Juan Cruz Valencia" />
      </Box>
    </Flex>
  );
};
