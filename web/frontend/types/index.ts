export interface Product {
  size: string | undefined;
  handle: string;
  title: string;
  description: string;
  price: string;
  images: string[];
  colors: string[];
  dropdowns: Dropdown[];
  variantGalleries: VariantGallery[];
}

export interface Dropdown {
  key: string;
  label: string;
  value: string;
}

export interface VariantGallery {
  title: string;
  galleryIds: string[];
  galleryUrls: string[];
}

export interface ShopifyProduct {
  id: string;
  title: string;
  handle: string;
  description: string;
  variants: {
    edges: Array<{
      node: {
        id: string;
        title: string;
        image: {
          src: string;
          altText: string | null;
        } | null;
        metafield?: {
          value: string;
          type: string;
        };
      };
    }>;
  };
  images: {
    edges: Array<{
      node: {
        src: string;
        altText: string | null;
      };
    }>;
  };
  priceRange: {
    minVariantPrice: {
      amount: string;
      currencyCode: string;
    };
  };
  metafields: Array<{
    key: string;
    value: string;
  }>;
}

export type MediaImageNode = {
  id: string;
  image: {
    url: string;
    altText: string | null;
  };
};

export type MediaImagesResponse = {
  nodes: MediaImageNode[];
};
