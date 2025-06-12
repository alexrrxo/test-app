import { ShopifyProduct } from "@/types";

export function flatGalleryIds(data: ShopifyProduct): string[] {
  return data?.variants?.edges?.flatMap(edge => {
    try {
      return edge.node.metafield ? JSON.parse(edge.node.metafield.value) : [];
    } catch {
      return [];
    }
  });
}
