import { Product, ShopifyProduct } from "@/types";
import { metafieldTitles } from "./metafieldTitles";

export function adaptShopifyProduct(
  data: ShopifyProduct | null | undefined,
  mediaMap: Record<string, string> = {}
): Product | null {
  if (!data) return null;

  try {
    const images =
      data.variants?.edges
        ?.flatMap(edge => edge?.node?.image?.src)
        ?.filter((src): src is string => typeof src === "string") || [];

    const metafields = data.metafields || [];
    const sizeMetafield = metafields.find(mf => mf?.key === "size");

    const variants = data.variants?.edges || [];
    const colors = variants
      .map(edge => edge?.node?.title)
      .filter((title): title is string => typeof title === "string");

    const priceAmount = data.priceRange?.minVariantPrice?.amount || "0";
    const currencyCode = data.priceRange?.minVariantPrice?.currencyCode || "USD";

    const dropdowns = metafields
      .filter(mf => mf?.key && mf.key !== "size" && mf.value)
      .map(mf => ({
        key: mf.key!,
        label: metafieldTitles[mf.key!] ?? mf.key!,
        value: mf.value!,
      }));

    const variantGalleries = variants.map(edge => {
      const title = edge?.node?.title || "";
      const metafieldValue = edge?.node?.metafield?.value;

      try {
        const ids = metafieldValue ? JSON.parse(metafieldValue) : [];
        const galleryUrls = (ids as string[])
          .map(id => mediaMap[id])
          .filter((url): url is string => Boolean(url));

        const mainImage = images.find(
          img => img && title && img.toLowerCase().includes(title.toLowerCase())
        );

        if (mainImage) {
          galleryUrls.unshift(mainImage);
        }

        return {
          title,
          galleryIds: ids,
          galleryUrls,
        };
      } catch (error) {
        console.error("Error parsing metafield:", error);
        return {
          title,
          galleryIds: [],
          galleryUrls: [],
        };
      }
    });

    return {
      size: sizeMetafield?.value || undefined,
      handle: data?.handle || "",
      title: data.title || "",
      description: data.description || "",
      price: `${priceAmount} ${currencyCode}`,
      images,
      colors,
      dropdowns,
      variantGalleries,
    };
  } catch (error) {
    console.error("Error adapting Shopify product:", error);
    return null;
  }
}
