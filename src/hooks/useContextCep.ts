import { useContext } from "react";
import { CepContext } from "../context/ContextCep";

export function useCepContext() {
    const context = useContext(CepContext);
    return context;
  }
  