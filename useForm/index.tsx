import { useState } from "react";
import { FormValues } from "../../interface/types";

export const useForm = (initialvalue?: FormValues) => {
  const [form, setForm] = useState({} as FormValues);

  const handleChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { target } = event;
    setForm({
      ...form,
      [target.name]: target.value,
    });
  };

  return {
    form,
    handleChange,
  };
};
