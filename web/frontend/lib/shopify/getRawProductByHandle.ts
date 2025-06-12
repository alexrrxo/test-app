import { ShopifyProduct } from "@/types";
import { shopifyFetch } from "../../../../server/shopify";

export async function getRawProductByHandle(handle: string): Promise<ShopifyProduct> {
  const query = `
    query getProductByHandle($handle: String!) {
      productByHandle(handle: $handle) {
        id
        title
        handle
        description
        variants(first: 100) {
          edges {
            node {
              id
              title
              image {
                src
                altText
              }
              metafield(namespace: "custom", key: "variant_gallery") {
                value
                type
              }
            }
          }
        }
        images(first: 100) {
          edges {
            node {
              src
              altText
            }
          }
        }
        priceRange {
          minVariantPrice {
            amount
            currencyCode
          }
        }
        metafields(identifiers: [
            { namespace: "custom", key: "size" },
            { namespace: "custom", key: "size_guide" },
            { namespace: "custom", key: "model_size" },
            { namespace: "custom", key: "details" },
            { namespace: "custom", key: "care_guide" }
        ]) {
            key
            value
        }
      }
    }
  `;

  const res = await shopifyFetch<{ productByHandle: ShopifyProduct }>({
    query,
    variables: { handle },
  });

  return res.productByHandle;
}
