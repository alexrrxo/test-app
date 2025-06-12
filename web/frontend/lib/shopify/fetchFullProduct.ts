import { getRawProductByHandle } from "./getRawProductByHandle";
import { flatGalleryIds } from "./flatGalleryIds";
import { fetchMediaUrls } from "./fetchMediaUrls";
import { adaptShopifyProduct } from "./adaptShopifyProduct";
import { Product } from "@/types";

export async function fetchFullProduct(handle: string): Promise<Product | null> {
  const raw = await getRawProductByHandle(handle);

  const galleryIds = flatGalleryIds(raw);
  const mediaMap = await fetchMediaUrls(galleryIds);
  return adaptShopifyProduct(raw, mediaMap);
}
