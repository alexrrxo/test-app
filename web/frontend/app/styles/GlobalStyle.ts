import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    outline: none;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
  :root {
    --font-inter: 'Inter', sans-serif;

    --swiper-navigation-color: #111;
    --swiper-pagination-color: #ff3c28;
    --swiper-pagination-bullet-inactive-color: #999;
    --swiper-pagination-bullet-inactive-opacity: 0.5;
    --swiper-pagination-bullet-size: 10px;
  }

  body {
    font-family: var(--font-inter);
    background: #fff;
    color: #111;
    margin: 0;

  }
`;
