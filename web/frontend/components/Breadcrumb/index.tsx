"use client";

import { Wrapper } from "./components/Wrapper";
import { Crumb } from "./components/Crumb";
import { Separator } from "./components/Separator";
import { Current } from "./components/Current";
import { FC } from "react";

interface Props {
  name: string;
}

export const Breadcrumb: FC<Props> = ({ name }) => {
  return (
    <Wrapper>
      <Crumb href="/">Home</Crumb>
      <Separator>/</Separator>
      <Current>{name}</Current>
    </Wrapper>
  );
};
