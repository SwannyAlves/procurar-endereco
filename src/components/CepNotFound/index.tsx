import { useCepContext } from "../../hooks/useContextCep";
import { CepMask } from "../../utils/CepMask";
import { Search } from "../Search";
import * as S from "./style";

export const CepNaoEncontrado = () => {
  const { cepNumberNoExist } = useCepContext();

  return (
    <S.CepNaoEncontradoContainer>
      <p>
        <span>Ops!</span> Não foi possível encontrar dados sobre o{" "}
        <span> CEP {CepMask(cepNumberNoExist)}</span>
      </p>
      <hr />
      <Search title={"Quer buscar um novo endereço?"} />
    </S.CepNaoEncontradoContainer>
  );
};
