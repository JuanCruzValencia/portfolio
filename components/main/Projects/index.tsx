import {
  Box,
  Flex,
  Image,
  Text,
  Button,
  Heading,
  Divider,
} from "@chakra-ui/react";
import NextLink from "next/link";

export const Projects = () => {
  return (
    <Flex direction="column" id="projects" gap="80px" mt="150px">
      <Heading textAlign="center" color="#bbe5ed" fontSize="45px">Projects</Heading>
      <Flex maxW="1000px" maxH="300px" gap="2rem" p={2}>
        <Box
          maxW="500px"
          display="flex"
          flexDirection="column"
          gap=".5rem"
          justifyContent="space-evenly"
        >
          <Divider />
          <Heading fontSize="25px" color="#bbe5ed">
            Baltos Shop - E-commerce React App Project
          </Heading>
          <Text textAlign="justify">
            Baltos Shop is a e-commerce web application that allows users to
            search for products stored in Firestore, add them to shopping cart
            and then make payment. App has login system functionality. The guest
            user is able to browse and add product to cart only. Checkout and
            payment option is available for registerd users.
          </Text>
          <NextLink href="https://github.com/JuanCruzValencia/Balto-Shop">
            <Button
              bg="#5643fd"
              _hover={{ bg: "#ba1e68" }}
              size="md"
              color="#ffffff"
            >
              GitHub
            </Button>
          </NextLink>
        </Box>
        <Box>
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/my-portfolio-jcvv.appspot.com/o/screen-recording%20(4).gif?alt=media&token=a0ddea47-185f-4b8c-98bf-ee46a42b1ced"
            alt="Baltos Shop"
            objectFit="contain"
          />
        </Box>
      </Flex>
      <Flex maxW="1000px" maxH="300px" direction="row-reverse" gap="2rem" p={2}>
        <Box
          maxW="500px"
          display="flex"
          flexDirection="column"
          gap=".5rem"
          justifyContent="space-evenly"
        >
          <Divider />
          <Heading fontSize="25px" color="#bbe5ed">
            JS News - News Portal Javascript App Project
          </Heading>
          <Text textAlign="justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            cumque impedit, similique repellendus delectus corrupti nulla dolore
            vel inventore at reprehenderit tenetur exercitationem soluta
            molestiae magnam eius animi, ea id?
          </Text>
          <NextLink href="https://github.com/JuanCruzValencia/News-web-app">
            <Button
              bg="#5643fd"
              _hover={{ bg: "#ba1e68" }}
              size="md"
              color="#ffffff"
            >
              GitHub
            </Button>
          </NextLink>
        </Box>
        <Box>
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/my-portfolio-jcvv.appspot.com/o/screen-recording%20(2).gif?alt=media&token=ca17c812-c7fa-4a8d-a352-92de43d2b6cc"
            alt="JS News"
            objectFit="contain"
          />
        </Box>
      </Flex>
      <Flex maxW="1000px" maxH="300px" gap="2rem" p={2}>
        <Box
          maxW="500px"
          display="flex"
          flexDirection="column"
          gap=".5rem"
          justifyContent="space-evenly"
        >
          <Divider />
          <Heading fontSize="25px" color="#bbe5ed">
            Natali del Percio - Static Portfolio
          </Heading>
          <Text textAlign="justify">
            Static page photograpy portfolio for web development coderhouse.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Reprehenderit eum praesentium exercitationem blanditiis accusantium
            quis dolores consequuntur pariatur est veniam harum inventore dicta
            itaque deleniti perspiciatis ipsum, autem vero quod. course.
          </Text>
          <NextLink href="https://github.com/JuanCruzValencia/Natali-Del-Percio-Fotografia">
            <Button
              bg="#5643fd"
              _hover={{ bg: "#ba1e68" }}
              size="md"
              color="#ffffff"
            >
              GitHub
            </Button>
          </NextLink>
        </Box>
        <Box>
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/my-portfolio-jcvv.appspot.com/o/screen-recording%20(3).gif?alt=media&token=a0b27c40-30b0-4a09-a44b-b72b72e3bba1"
            alt="Natali del Percio"
            objectFit="contain"
            maxH="400px"
          />
        </Box>
      </Flex>
    </Flex>
  );
};
