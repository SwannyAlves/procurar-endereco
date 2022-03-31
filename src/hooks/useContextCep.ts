import { useContext } from "react";
import { CepContext } from "../context/ContextCep";

export const useCepContext = () => {
    const context = useContext(CepContext);
    return context;
  }
  