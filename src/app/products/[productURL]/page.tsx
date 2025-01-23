// "use client";
import Image from "next/image";
import { client } from "@/sanity/lib/client";

interface ProductDetailProps {
  params: { productURL: string };
}

export default async function ProductDetail({ params }: ProductDetailProps) {
  const { productURL } = params;

  const product = await client.fetch(
    `*[_type == "product" && slug.current == $productURL][0]{
      title,
      price,
      description,
      "image": image[].asset->url
    }`,
    { productURL }
  );

  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
    <div className="flex flex-col md:flex-row items-center gap-8 p-6">
      <div className="w-full md:w-1/2">
        {product.image?.length > 0 ? (
          <Image
            src={product.image[0]}
            alt={product.title}
            width={600}
            height={600}
            className="object-contain"
          />
        ) : (
          <div className="text-gray-500">No image available</div>
        )}
      </div>
      <div className="w-full md:w-1/2 flex flex-col gap-4">
        <h1 className="text-3xl font-bold">{product.title}</h1>
        <p className="text-2xl font-semibold text-green-600">₹{product.price}</p>
        <p className="text-gray-700">{product.description}</p>
        <button className="w-[200px] py-3 bg-black text-white rounded-md hover:bg-gray-800 snipcart-add-item"
          data-item-id="product-id"
          data-item-name="Product Name"
          data-item-price="25.00"
          data-item-url="/product-page-url"
          data-item-description="Short description of the product">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
