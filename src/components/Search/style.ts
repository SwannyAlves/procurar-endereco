import styled from "styled-components";

export const SearchContainer = styled.div`
  label {
    display: flex;
    justify-content: center;
  }
`;

export const Search = styled.div`
  display: flex;
  transition: filter 0.2s;
  display: flex;
  justify-content: center;
  &:hover {
    filter: brightness(0.9);
  }
`;

export const SearchButton = styled.button`
  border-style: solid solid solid none;
  border-radius: 0 10px 10px 0;
  border-width: 1px;
  border-color: var(--blueDark);
  padding-right: 20px;
  img {
    width: 1.25rem;
    margin-top: 4px;
  }
`;

export const SearchInput = styled.input`
  border-style: solid none solid solid;
  border-radius: 10px 0 0 10px;
  max-width: 394px;
  width: 100%;
  border-width: 1px;
  border-color: var(--blueDark);
  height: 3.25rem;
  padding-left: 20px;
`;
