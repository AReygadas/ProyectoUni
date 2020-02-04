import styled from 'styled-components'

export const Usuario = styled.input`
  ::placeholder{
      color: white;
      opacity: 0.8;
  }
  padding:25px;
  font-family: inherit;
  width: 100%;
  border: 15px;
  border-bottom: 2px solid gray;
  outline: 0;
  font-size: 1.3rem;
  color: white;
  background: transparent;
  

  &:focus{
  
    transition: 0.2s;
    padding-bottom: 6px;  
    font-weight: 700;
    border-width: 3px;
    border-image: linear-gradient(to right, red, purple);
    border-image-slice: 1;
  }

`
export const TextoAz = styled.h1 `
  color: blue;
  font-size: 16px;
  text-align: right;
`
export const Contrase = styled.input`
  padding: 25px;
  font-family: inherit;
  width: 100%;
  border: 15px;
  border-bottom: 2px solid gray;
  outline: 0;
  font-size: 1.3rem;
  color: white;
  background: transparent;
  ::placeholder{
      color: white;
      opacity: 0.8;
  }

  &:focus{
    transition: 0.2s;
    padding-bottom: 6px;  
    font-weight: 700;
    border-width: 3px;
    border-image: linear-gradient(to right, #09EAD9 , purple);
    border-image-slice: 1;
  }

`