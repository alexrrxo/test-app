"use client";
import { FC, useState } from "react";
import styled from "styled-components";

type Props = {
  title: string;
  text: string;
};

export const DropdownSection: FC<Props> = ({ title, text }) => {
  const [open, setOpen] = useState(false);

  return (
    <Section>
      <Header onClick={() => setOpen(prev => !prev)}>
        {title}
        <span>{open ? "−" : "+"}</span>
      </Header>
      {open && <Content>{text}</Content>}
    </Section>
  );
};

const Section = styled.div`
  border-top: 1px solid #eee;
  margin-top: 24px;
  padding-top: 16px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  font-weight: 600;
  font-size: 16px;
  color: #111;

  &:hover {
    color: #e60023;
  }
`;

const Content = styled.div`
  margin-top: 12px;
  color: #444;
  font-size: 15px;
  line-height: 1.6;
`;
