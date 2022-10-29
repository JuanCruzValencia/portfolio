import {
  FormControl,
  FormLabel,
  Heading,
  Input,
  Button,
  Textarea,
} from "@chakra-ui/react";
import { useForm } from "../../../useForm/index";
import { FormValues } from "../../../interface/types";
import { saveMessages } from "../../../firebase/functions";

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
    <FormControl>
      <Heading>Contact me</Heading>
      <FormLabel>Name</FormLabel>
      <Input
        type="text"
        name="name"
        onChange={(e) => handleChange(e)}
        pattern="[a-zA-Z][a-zA-Z ]{2,}"
      />
      <FormLabel>Email</FormLabel>
      <Input
        type="email"
        name="email"
        onChange={(e) => handleChange(e)}
        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}"
      />
      <FormLabel>Message</FormLabel>
      <Textarea name="textarea" onChange={(e) => handleChange(e)} />
      <Button type="submit" onClick={(e) => handleClick(e)}>
        Send
      </Button>
    </FormControl>
  );
};
