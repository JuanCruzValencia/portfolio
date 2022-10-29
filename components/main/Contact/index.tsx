import {
  FormControl,
  FormLabel,
  Heading,
  Input,
  Button,
  Textarea,
  Container,
  Divider,
} from "@chakra-ui/react";
import { useForm } from "../../../useForm/index";
import { FormValues } from "../../../interface/types";
import { saveMessages } from "../../../firebase/functions";
import { FiSend } from "react-icons/fi";

export const Contact = () => {
  const { form, handleChange } = useForm({
    name: "",
    email: "",
    textarea: "",
  } as FormValues);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    saveMessages(form);
  };

  return (
    <Container>
      <FormControl>
        <Heading
          textAlign="center"
          color="#bbe5ed"
          fontSize="45px"
          mt="150px"
          p="2rem"
        >
          Contact me
        </Heading>
        <Divider />
        <FormLabel color="#bbe5ed" pt="2rem">
          Name
        </FormLabel>
        <Input
          type="text"
          name="name"
          onChange={(e) => handleChange(e)}
          pattern="[a-zA-Z][a-zA-Z ]{2,}"
          color="#bbe5ed"
        />
        <FormLabel color="#bbe5ed" pt="2rem">
          Email
        </FormLabel>
        <Input
          type="email"
          name="email"
          onChange={(e) => handleChange(e)}
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}"
          color="#bbe5ed"
        />
        <FormLabel color="#bbe5ed" pt="2rem">
          Message
        </FormLabel>
        <Textarea
          name="textarea"
          onChange={(e) => handleChange(e)}
          color="#bbe5ed"
        />
        <Button
          type="submit"
          onClick={(e) => handleClick(e)}
          bg="#5643fd"
          _hover={{ bg: "#ba1e68" }}
          size="md"
          color="#ffffff"
          mt="2rem"
        >
          Send
        </Button>
      </FormControl>
    </Container>
  );
};
