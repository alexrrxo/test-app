import { useEffect, useState } from "react";

type DeviceType = "mobile" | "tablet" | "desktop";

export function useDeviceType(): DeviceType {
  const [device, setDevice] = useState<DeviceType>("desktop");

  useEffect(() => {
    const check = () => {
      const width = window.innerWidth;
      if (width <= 480) setDevice("mobile");
      else if (width <= 1024) setDevice("tablet");
      else setDevice("desktop");
    };

    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return device;
}

export const swiperConfig = {
  mobile: {
    slidesPerView: 1,
    spaceBetween: 8,
    navigation: false,
    pagination: { clickable: true },
  },
  tablet: {
    slidesPerView: 1,
    spaceBetween: 12,
    navigation: true,
    pagination: true,
  },
  desktop: {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: true,
    pagination: true,
  },
};
