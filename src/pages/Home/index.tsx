import { useCepContext } from "../../hooks/useContextCep";
import { CepNaoEncontrado } from "../../components/CepNotFound";
import { Result } from "../../components/Result";
import { Search } from "../../components/Search";
export const Home = () => {
  const { cep, primeiraInteracao, cepError, cepExist } = useCepContext();
  return (
    <>
      {primeiraInteracao && !cepExist && !cepError && (
        <Search title={"Quer buscar um novo endereço?"} />
      )}
      {cep && cepExist && <Result />}
      {cepError && !cepExist && primeiraInteracao && <CepNaoEncontrado />}
    </>
  );
};
