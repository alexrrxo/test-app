"use client";
import { GlobalStyle } from "@/app/styles/GlobalStyle";
import { FC } from "react";

interface Props {
  children: React.ReactNode;
}

const RootLayout: FC<Props> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <GlobalStyle />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
