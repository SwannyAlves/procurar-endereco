import { useCepContext } from "../../hooks/useContextCep";
import { CepMask } from "../CepMask";
import { Search } from "../Search";
import * as S from "./style";

export const CepNaoEncontrado = () => {
  const { cepNumberNoExist } = useCepContext();

  return (
    <S.CepNaoEncontradoContainer>
      <p>
        <span>Ops!</span> Não foi possível encontrar dados sobre o CEP{" "}
        {CepMask(cepNumberNoExist)}
      </p>
      <Search title={"Quer buscar um novo endereço?"} />
    </S.CepNaoEncontradoContainer>
  );
};
