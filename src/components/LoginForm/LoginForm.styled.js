import styled from "styled-components";

export const Form = styled.form``;

export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 375px;
  padding: 20px;
  transform: translate(-50%, -50%);
  background-color: #6196a6;
  box-shadow: 2px 5px 7px #5f5d9c;
  border-radius: 8px;
`;

export const ContainerBox = styled.div`
  position: relative;
`;

export const Title = styled.h2`
  color: #f4edcc;
  text-align: center;
`;

export const Input = styled.input`
  border: none;
  outline: none;
  width: 60%;
  padding: 10px;
  font-size: 16px;
  color: #f4edcc;
  margin-bottom: 20px;
  border-bottom: 1px solid #f4edcc;
  outline: none;
  background-color: transparent;

  :focus,
  :valid {
    color: #f4edcc;
    font-size: 16px;
  }
`;

export const Button = styled.button`
  padding: 10px 20px;
  color: #5f5d9c;
  font-family: "Madimi One", sans-serif;
  font-weight: 700;
  font-size: 16px;
  text-decoration: none;
  text-transform: uppercase;
  border: none;
  outline: none;
  border-radius: 8px;
  transition: all 0.5s ease;

  :hover {
    background-color: #5f5d9c;
    color: #f4edcc;
  }
`;
