import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: calc(100vh - 50px);
`;
export const Title = styled.h1`
  font-weight: 700;
  font-size: 46px;
  text-align: center;
  color: #5f5d9c;
`;

export const Link = styled(NavLink)`
  margin-top: 25px;
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  text-decoration: none;
  color: #f4edcc;
  background-color: #6196a6;
  font-size: 18px;
  transition: all 250ms ease;

  &:hover,
  &:focus {
    background-color: #5f5d9c;
    color: #f4edcc;
  }
`;
