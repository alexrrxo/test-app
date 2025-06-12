import ProductPage from "@/components/ProductPage";
import { fetchFullProduct } from "@/lib/shopify/fetchFullProduct";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { handle: string };
}): Promise<Metadata> {
  const product = await fetchFullProduct(params.handle);

  if (!product) {
    return {
      title: "Product not found",
      description: "The product you are looking for does not exist.",
    };
  }

  return {
    title: product.title,
    description: product.description?.slice(0, 160),
    openGraph: {
      title: product.title,
      description: product.description,
      images: product.images?.slice(0, 1).map((url: string) => ({
        url,
        alt: product.title,
      })),
    },
  };
}

export default async function ProductPageRoute({ params }: { params: { handle: string } }) {
  const product = await fetchFullProduct(params.handle);

  if (!product) return notFound();

  return <ProductPage product={product} />;
}
