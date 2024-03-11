import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-bottom: 40px;
`;

export const Label = styled.label`
  color: #5f5d9c;
  font-size: 18px;
`;

export const Input = styled.input`
  margin-top: 10px;
  width: 350px;
  border: none;
  outline: none;
  padding: 10px 20px;
  font-size: 14px;
  color: #6196a6;
  border-radius: 8px;
`;

export const Button = styled.button`
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 25px;
  border-radius: 8px;
  margin-left: 15px;
  background-color: #81689d;
  color: #fff3cf;
  transition: all 250ms ease;

  &:focus,
  &:hover {
    background-color: #fff3cf;
    color: #81689d;
    outline: 0.5px solid #81689d;
  }
`;

export const Span = styled.span`
  display: flex;
`;
