import { MediaImagesResponse } from "@/types";
import { shopifyFetch } from "../../../../server/shopify";

export async function fetchMediaUrls(ids: string[]) {
  if (!ids?.length) return {};

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

  const res = await shopifyFetch<MediaImagesResponse>({ query, variables: { ids } });

  const result: Record<string, string> = {};

  res.nodes.forEach(node => {
    if (node?.id && node?.image?.url) {
      result[node.id] = node.image.url;
    }
  });

  return result;
}
