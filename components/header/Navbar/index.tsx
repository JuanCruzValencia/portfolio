import { Flex, Box, Spacer, Link, Image } from "@chakra-ui/react";
import NextLink from "next/link";

export const Navbar = () => {
  return (
    <Flex>
      <Box>
        <Image
          src="https://firebasestorage.googleapis.com/v0/b/my-portfolio-jcvv.appspot.com/o/Frame.svg?alt=media&token=a1833f6d-ebad-494e-a69f-d2f3f1f2bce8"
          alt="logo_svg"
        />
      </Box>
      <Spacer />
      <Box>
        <NextLink href="/about">
          <Link>About</Link>
        </NextLink>
        <NextLink href="/projects">
          <Link>Projects</Link>
        </NextLink>
        <NextLink href="/contact">
          <Link>Contact</Link>
        </NextLink>
      </Box>
    </Flex>
  );
};
