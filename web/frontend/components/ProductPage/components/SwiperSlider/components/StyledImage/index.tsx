import styled from "styled-components";

export const StyledImage = styled.img`
  max-height: 80vh;
  max-width: 100%;
  height: auto;
  width: 100%;
  object-fit: contain;
  border-radius: 10px;
  border: none;
  outline: none;

  @media (max-width: 990px) {
    max-height: 60vh;
  }

  @media (max-width: 768px) {
    max-height: 50vh;
  }
`;
