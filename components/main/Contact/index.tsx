import {
  FormControl,
  FormLabel,
  Heading,
  Input,
  Button,
  Textarea,
  Container,
  Highlight,
  Stack,
  Text,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import { useForm } from "../../../useForm/index";
import { FormValues } from "../../../interface/types";
import { saveMessages } from "../../../firebase/functions";
import React, { useState } from "react";

export const Contact = () => {
  const [message, setMessage] = useState(false);
  const { form, handleChange } = useForm({
    name: "",
    email: "",
    textarea: "",
  } as FormValues);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    saveMessages(form);
    setMessage(true);
  };

  return (
    <Container
      id="contact"
      m="150px 0"
      display="flex"
      flexDirection="row"
      h="450px"
      gap="5rem"
      alignItems="center"
      minW="100%"
    >
      <Stack display="flex" flexDirection="column" w="600px">
        <Highlight
          query="send me a"
          styles={{
            px: "2",
            py: "1",
            rounded: "full",
            bg: "purple.100",
            w: "100px",
            color: "#000000",
          }}
        >
          SEND ME A
        </Highlight>
        <Heading color="#bbe5ed" fontSize="45px" fontWeight="600">
          Message
        </Heading>
        <Text>
          Get this space and tell me your ideas so that we can work on them
          together.
        </Text>
      </Stack>
      {message ? (
        <Alert status="success" maxW="270px" variant="solid">
          Message sent correctly. Thanks!
        </Alert>
      ) : (
        <form onSubmit={(e) => handleSubmit(e)}>
          <FormControl minW="600px" textAlign="center">
            <FormLabel color="#bbe5ed">NAME</FormLabel>
            <Input
              type="text"
              name="name"
              onChange={(e) => handleChange(e)}
              pattern="[a-zA-Z][a-zA-Z ]{2,}"
              color="#bbe5ed"
              isRequired
            />
            <FormLabel color="#bbe5ed" pt="2rem">
              EMAIL
            </FormLabel>
            <Input
              type="email"
              name="email"
              onChange={(e) => handleChange(e)}
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}"
              color="#bbe5ed"
              isRequired
            />
            <FormLabel color="#bbe5ed" pt="2rem">
              MESSAGE
            </FormLabel>
            <Textarea
              name="textarea"
              onChange={(e) => handleChange(e)}
              color="#bbe5ed"
              isRequired
            />
            <Button
              type="submit"
              bg="#5643fd"
              _hover={{ bg: "#ba1e68" }}
              w="80px"
              minH="40px"
              color="#ffffff"
              mt="2rem"
            >
              Send
            </Button>
          </FormControl>
        </form>
      )}
    </Container>
  );
};
