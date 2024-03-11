import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Link = styled(NavLink)`
  padding: 10px 20px;
  color: #f4edcc;
  font-weight: 700;
  border-radius: 8px;

  &.active {
    background-color: #6196a6;
  }
`;
