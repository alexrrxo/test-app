"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FC } from "react";
import { swiperConfig, useDeviceType } from "@/hooks/useDeviceBreakpoint";
import { StyledSwiperWrapper } from "./components/StyledSwiperWrapper";
import { StyledImage } from "./components/StyledImage";

interface Props {
  images: string[];
}

export const SwiperSlider: FC<Props> = ({ images }) => {
  const device = useDeviceType();
  const config = swiperConfig[device];

  return (
    <StyledSwiperWrapper>
      <Swiper
        key={device}
        modules={[Navigation, Pagination]}
        slidesPerView={config.slidesPerView}
        spaceBetween={config.spaceBetween}
        navigation={config.navigation}
        pagination={config.pagination}
        observer
        loop
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <StyledImage src={src} alt={`Product image ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </StyledSwiperWrapper>
  );
};
