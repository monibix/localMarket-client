import styled from "styled-components";

export const Form = styled.form`
  width: 500px;
  margin: 10px auto;
  display: flex;
  flex-direction: column;
  border: 3px solid purple;
  padding: 10px;
`;

export const Input = styled.input`
  border-radius: 10px;
  border: 1px solid purple;
  margin: 10px;
`;

export const Label = styled.label`
  font-weight: bold;
`;

export const Button = styled.button`
  background-color: transparent;
  border: 1px solid purple;
  color: purple;
`;
