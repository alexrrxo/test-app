import { MediaImageNode } from "@/types";
import dotenv from "dotenv";
dotenv.config();

export async function shopifyFetch<T = any>({
  query,
  variables,
}: {
  query: string;
  variables?: Record<string, any>;
}): Promise<T> {
  const url = `https://${process.env.SHOP}/api/2025-04/graphql.json`;

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_API_TOKEN!,
      },
      body: JSON.stringify({ query, variables }),
    });

    const json = await res.json();

    if (json.errors) {
      console.error("❌ Shopify GraphQL error:", JSON.stringify(json.errors, null, 2));
      throw new Error("Shopify API error");
    }

    return json.data;
  } catch (error) {
    console.error("❌ Shopify error:");
    console.error("URL:", url);
    console.error(
      "Token:",
      process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_API_TOKEN?.slice(0, 8) + "..."
    );
    console.error("Error:", error);
    throw error;
  }
}

export async function getMediaImagesByIds(ids: string[]) {
  const query = `
    query getMediaImages($ids: [ID!]!) {
      nodes(ids: $ids) {
        ... on MediaImage {
          id
          image {
            url
            altText
          }
        }
      }
    }
  `;

  const data = await shopifyFetch<{ nodes: MediaImageNode[] }>({ query, variables: { ids } });

  return data.nodes;
}
