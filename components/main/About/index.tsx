import {
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Divider,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { IoReaderOutline } from "react-icons/io5";

export const About = () => {
  return (
    <Flex direction="row-reverse" id="about" gap="80px" mt="150px" p="2rem" h="470px">
      <Box display="flex" flexDirection="column" gap="3rem">
        <Heading textAlign="center" color="#bbe5ed" fontSize="45px">
          About me
        </Heading>
        <Text textAlign="justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          quaerat alias laborum, eum beatae dicta maiores ducimus harum nam
          deserunt vero, voluptas fugit, fuga ab quod sit minima ratione
          corporis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
          officiis numquam provident aliquid officia aliquam quaerat illum,
          tempore blanditiis molestias atque voluptatibus, veniam aperiam
          laudantium beatae et ad ullam adipisci! Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Officia dolorum nam vero voluptatem,
          quidem illum modi itaque eius ut accusantium nemo dolores, aperiam
          nobis blanditiis assumenda optio, corrupti culpa veniam.
        </Text>
        <NextLink href="">
          <Button
            bg="#5643fd"
            _hover={{ bg: "#ba1e68" }}
            size="md"
            color="#ffffff"
          >
            Resume
          </Button>
        </NextLink>
      </Box>
      <Divider orientation="vertical" color="#bbe5ed"/>
      <Box maxW="500px" minW="fit-content">
        <Image
          src="https://firebasestorage.googleapis.com/v0/b/my-portfolio-jcvv.appspot.com/o/juan-cruz-valencia.jpg?alt=media&token=46db5410-decc-42fa-b125-3c6f9eda1cfb"
          alt="Juan Cruz Valencia"
          borderRadius="15px"
          boxSize="400px"
        />
      </Box>
    </Flex>
  );
};
