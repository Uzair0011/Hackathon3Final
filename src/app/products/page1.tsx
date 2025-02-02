"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

interface IProduct {
  productName: string;
  price: number;
  productURL: string;
  image: string[];
  color: string;
  gender: string;
}

export default function AllProducts() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const productsData: IProduct[] = await client.fetch(` 
        *[_type == "product"]{
          productName, 
          price,
          "productURL": slug.current,
          "image": image[].asset->url
        }
      `);
      setProducts(productsData);
      setLoading(false);
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="px-6 pt-8 ">
      <div className="w-full h-auto flex flex-wrap gap-4 justify-center lg:justify-between">
        {products.map((product) => (
          <div
            key={product.productURL}
            className="w-[250px] flex flex-col items-center border p-4 rounded-lg shadow-md "
          >
            <Link href={`/products/${product.productURL}`}>
              <div className="w-full h-[270px] flex items-center justify-center bg-gray-100 cursor-pointer ">
                {product.image?.[0] ? (
                  <Image
                    src={urlFor(product.image[0]).url()} // Ensure the first image exists
                    alt={product.productName}
                    width={200}
                    height={200}
                    className="object-contain"
                  />
                ) : (
                  <div className="text-gray-500">No Image Available</div>
                )}
              </div>
            </Link>

            <div className="text-left mt-4">
              <h1 className="text-red-700">Just In</h1>
              <h3 className="text-lg font-medium">{product.productName}</h3>
              <p className="text-lg text-black">MRP: ₹ {product.price}.00</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
