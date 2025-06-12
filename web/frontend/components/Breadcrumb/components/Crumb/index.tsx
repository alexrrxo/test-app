import Link from "next/link";
import styled from "styled-components";

export const Crumb = styled(Link)`
  color: #666;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
