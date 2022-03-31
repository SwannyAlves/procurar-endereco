import { useCepContext } from "../../hooks/useContextCep";
import { CepMask } from "../CepMask";
import { Search } from "../Search";
import * as S from "./style";

export const Result = () => {
  const { cep } = useCepContext();
  return (
    <S.ResultContainer>
      <p>
        Mostrando resultados para o <span>{CepMask(cep.cep)}</span>
      </p>
      <hr />
      <p>
        <span>Rua</span>: {cep.logradouro}
      </p>
      <p>
        <span>Bairro:</span> {cep.bairro}
      </p>
      <p>
        <span>Cidade:</span>
        {cep.localidade}
      </p>
      <p>
        <span>Estado:</span> {cep.uf}
      </p>
      <hr id="lastLine" />
      <Search title={"Quer buscar um novo endereço?"} />
    </S.ResultContainer>
  );
};
