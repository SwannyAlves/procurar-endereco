import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { DataCep } from "../services/api";
interface Cep {
  logradouro: string;
  bairro: string;
  localidade: string;
  uf: string;
}
interface CepContextProps {
  cep: Cep[];
  setCepData: Dispatch<SetStateAction<string | undefined>>;
}

interface CepContextProviderProps {
  children: ReactNode;
}

export const CepContext = createContext({} as CepContextProps);

export const CepContextProvider = ({ children }: CepContextProviderProps) => {
  const [cep, setCep] = useState<Cep[]>([]);
  const [cepData, setCepData] = useState("");

  useEffect(() => {
    DataCep(cepData).then((data) => {
      setCep(data.data);
    });
  }, [cepData]);

  return (
    <CepContext.Provider value={{ cep, setCepData }}>
      {children}
    </CepContext.Provider>
  );
};

export default CepContextProvider;
