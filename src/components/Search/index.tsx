import { useState } from "react";
import search from "../../assets/search.svg";
import { useCepContext } from "../../hooks/useContextCep";
import { CepMask } from "../CepMask";
import * as S from "./style";

interface SearchProp {
  title: string;
}

export const Search = ({ title }: SearchProp) => {
  const [cepMask, setCepMask] = useState("");
  const { setCepData } = useCepContext();

  function MaskCep(e: { target: { value: string } }) {
    const { value } = e.target;
    setCepMask(CepMask(value));
  }

  function handleSubmit() {
    const cepNoMask = cepMask.replace(/\D/g, "");
    setCepData(cepNoMask);
  }

  function handleKeyPress(event) {
    if (event.key === "Enter") {
      handleSubmit();
    }
  }
  return (
    <S.SearchContainer>
      <label>{title}</label>
      <S.Search>
        <S.SearchInput
          name="cep"
          onChange={MaskCep}
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
