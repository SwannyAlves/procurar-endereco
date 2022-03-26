import { useState } from "react";
import search from "../../assets/search.svg";
import { CepMask } from "../CepMask";
import * as S from "./style";

export const Search = () => {
  const [cepMask, setCepMask] = useState("");

  function handleMaskCep(e: { target: { value: string } }) {
    const { value } = e.target;
    setCepMask(CepMask(value));
  }

  function handleSubmit() {
    const cepNoMask = cepMask.replace(/\D/g, "");
    console.log(cepNoMask);
  }

  function handleKeyPress(event) {
    if (event.key === "Enter") {
      handleSubmit();
    }
  }
  return (
    <S.SearchContainer>
      <label>Está buscando um endereço?</label>
      <S.Search>
        <S.SearchInput
          name="cep"
          onChange={handleMaskCep}
          onKeyPress={handleKeyPress}
          placeholder="Insira um cep"
          value={cepMask}
        />
        <S.SearchButton onClick={handleSubmit} type="submit">
          <img src={search} alt="search" />
        </S.SearchButton>
      </S.Search>
    </S.SearchContainer>
  );
};
