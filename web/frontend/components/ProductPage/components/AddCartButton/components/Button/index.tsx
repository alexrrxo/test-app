import styled from "styled-components";

export const Button = styled.button`
  background: #e60023;
  color: #fff;
  padding: 12px 20px;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  letter-spacing: 0.5px;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: #cc001f;
  }

  &:active {
    background: #b3001a;
  }
`;
