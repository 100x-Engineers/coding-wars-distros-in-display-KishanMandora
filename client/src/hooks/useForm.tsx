import { useContext } from "react";
import { FormContext } from "../context/InputContext";

export const useForm = () => useContext(FormContext);
