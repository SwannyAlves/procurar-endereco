import { CardSearch } from "../../components/CardSearch";
import { CepNaoEncontrado } from "../../components/CepNotFound";
import { Result } from "../../components/Result";
import { useCepContext } from "../../hooks/useContextCep";
export const Home = () => {
  const { cep, primeiraInteracao, cepError, cepExist } = useCepContext();
  return (
    <>
      {primeiraInteracao && !cepExist && !cepError && <CardSearch />}
      {cep && cepExist && <Result />}
      {cepError && !cepExist && primeiraInteracao && <CepNaoEncontrado />}
    </>
  );
};
