import { CardSearch } from "../../components/CardSearch";
import { CepNaoEncontrado } from "../../components/CepNotFound";
import { Result } from "../../components/Result";
import { useCepContext } from "../../hooks/useContextCep";
import { HomeContainer } from "./style";

export const Home = () => {
  const { cep, primeiraInteracao, cepError, cepExist } = useCepContext();
  return (
    <HomeContainer>
      {primeiraInteracao && !cepExist && !cepError && <CardSearch />}
      {cep && cepExist && <Result />}
      {cepError && !cepExist && primeiraInteracao && <CepNaoEncontrado />}
    </HomeContainer>
  );
};
