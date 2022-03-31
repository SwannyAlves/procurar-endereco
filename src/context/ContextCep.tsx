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
  cep: string;
  logradouro: string;
  bairro: string;
  localidade: string;
  uf: string;
}
interface CepContextProps {
  cep: Cep;
  setCepData: Dispatch<SetStateAction<string | undefined>>;
  cepError: boolean;
  primeiraInteracao: boolean;
  cepExist: boolean;
  cepNumberNoExist: string;
}

interface CepContextProviderProps {
  children: ReactNode;
}

export const CepContext = createContext({} as CepContextProps);

export const CepContextProvider = ({ children }: CepContextProviderProps) => {
  const [cep, setCep] = useState();
  const [cepData, setCepData] = useState<any>();
  const [cepError, setCepError] = useState(false);
  const [primeiraInteracao, setPrimeiraInteracao] = useState(true);
  const [cepExist, setCepExist] = useState(false);
  const [cepNumberNoExist, setCepNumberNoExist] = useState("");

  useEffect(() => {
    if (cepData === undefined || cepData === "" || cepData === null) {
      setPrimeiraInteracao(true);
      return;
    } else {
      DataCep(cepData).then((data) => {
        setCepError(false);
        if (data.data.erro === true) {
          setCepError(true);
          setCepExist(false);
        } else {
          setCep(data.data);
          setCepError(false);
          setCepExist(true);
        }
        setCepNumberNoExist(cepData);
      });
    }
  }, [cepData]);

  return (
    <CepContext.Provider
      value={{
        cep,
        setCepData,
        cepError,
        primeiraInteracao,
        cepExist,
        cepNumberNoExist,
      }}
    >
      {children}
    </CepContext.Provider>
  );
};

export default CepContextProvider;
