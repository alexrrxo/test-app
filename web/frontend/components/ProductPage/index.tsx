"use client";

import AddToCartButton from "./components/AddCartButton";
import { DropdownSection } from "./components/DropdownSection";
import { Breadcrumb } from "../Breadcrumb";
import { Container } from "./components/Container";
import { Layout } from "./components/Layout";
import { GalleryWrapper } from "./components/GalleryWrapper";
import { InfoWrapper } from "./components/InfoWrapper";
import { Title } from "./components/Title";
import { Price } from "./components/Price";
import { Description } from "./components/Description";
import { SwiperSlider } from "./components/SwiperSlider";
import { FC, useState } from "react";
import { FieldLabel } from "./components/FieldLabel";
import { ColorSelector } from "./components/ColorSelector";
import { Product } from "@/types";
import styled from "styled-components";

const FallbackWrapper = styled.div`
  padding: 80px 20px;
  text-align: center;
`;

const FallbackTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 16px;
`;

const FallbackText = styled.p`
  font-size: 16px;
  color: #666;
`;

interface Props {
  product: Product | null;
}

const ProductPage: FC<Props> = ({ product }) => {
  const [selectedColor, setSelectedColor] = useState(product?.colors[0] || "");

  if (!product) {
    return (
      <FallbackWrapper>
        <FallbackTitle>Oops! Product not found 😢</FallbackTitle>
        <FallbackText>
          Something went wrong or this product is no longer available. <br />
          Please try again later or go back to the homepage.
        </FallbackText>
      </FallbackWrapper>
    );
  }

  const selectedGallery = product.variantGalleries.find(g => g.title === selectedColor);

  return (
    <Container>
      <Breadcrumb name={product?.handle} />

      <Layout>
        <GalleryWrapper>
          <SwiperSlider images={selectedGallery?.galleryUrls ?? product.images} />
        </GalleryWrapper>

        <InfoWrapper>
          <Title>{product.title}</Title>
          <Price>{product.price}</Price>

          <FieldLabel>Color: {selectedColor}</FieldLabel>
          <ColorSelector
            onChangeSelectedColor={setSelectedColor}
            selectedColor={selectedColor}
            colors={product.colors}
          />

          <FieldLabel>Size: {product.size}</FieldLabel>

          <AddToCartButton />

          <Description>{product.description}</Description>

          {product.dropdowns.map(metafield => (
            <DropdownSection key={metafield.key} title={metafield.label} text={metafield.value} />
          ))}
        </InfoWrapper>
      </Layout>
    </Container>
  );
};

export default ProductPage;
