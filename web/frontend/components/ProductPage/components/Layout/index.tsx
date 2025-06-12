"use client";

import styled from "styled-components";

export const Layout = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  margin-top: 20px;

  box-sizing: border-box;

  & > * {
    flex: 1 1 50%;
    max-width: 50%;
    box-sizing: border-box;
  }

  @media (max-width: 990px) {
    & > * {
      flex: 1 1 100%;
      max-width: 100%;
    }
  }
`;
