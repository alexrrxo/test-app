import styled from "styled-components";

export const StyledSwiperWrapper = styled.div`
  .swiper-button-prev,
  .swiper-button-next {
    color: #111;
    top: 45%;
    width: 32px;
    height: 32px;
    background: rgba(255, 255, 255, 0.9);
    border-radius: 50%;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.15);
    transition: all 0.2s ease;

    &:after {
      font-size: 16px;
    }

    &:hover {
      background: #ff3c28;
      color: #fff;
    }
  }

  .swiper-pagination-bullet {
    background-color: #ccc;
    opacity: 1;
  }

  .swiper-pagination-bullet-active {
    background-color: #ff3c28;
  }
`;
