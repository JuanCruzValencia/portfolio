import { collection, addDoc, getFirestore } from "firebase/firestore";
import { FormValues } from "../interface/types";

export const saveMessages = async ({ name, email, textarea }: FormValues) => {
  const db = getFirestore();
  await addDoc(collection(db, "messages"), {
    name: name,
    email: email,
    message: textarea,
  });
};
