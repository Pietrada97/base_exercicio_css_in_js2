import styled from 'styled-components'

export const FormContainer = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: var(--cor-secundaria);
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;
`

// Especificando que SearchInput é um input HTML
export const SearchInput = styled.input.attrs({
  type: 'search'
})`
  padding: 0 16px;
  outline-color: var(--cor-principal);
`

export const SearchButton = styled.button`
  background-color: var(--cor-principal);
  border: 1px solid var(--cor-principal);
  height: 40px;
  padding: 0 16px;
  font-size: 18px;
  color: var(--cor-secundaria);
  margin-left: 8px;
  cursor: pointer;
`
