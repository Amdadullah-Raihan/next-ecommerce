// app/product/[id]/page.js
import { prisma } from "@/lib/prisma";
import Image from "next/image";
import Link from "next/link";

async function getProduct(id) {
  const product = await prisma.product.findUnique({
    where: { id },
  });
  return product;
}

export default async function ProductPage({ params }) {
  const product = await getProduct(params.id);

  if (!product) {
    return <div className="p-6">Product not found</div>;
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Product Image */}
        <div className="relative w-full h-96">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-cover rounded-xl"
          />
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <p className="text-xl text-gray-700 mb-4">${product.price}</p>
          <p className="text-gray-600 mb-6">{product.description}</p>

          {/* Size and Color selectors (simplified) */}
          {product.sizes?.length > 0 && (
            <div className="mb-4">
              <label className="block font-medium mb-1">Size</label>
              <select className="border p-2 rounded">
                {product.sizes.map((size) => (
                  <option key={size}>{size}</option>
                ))}
              </select>
            </div>
          )}

          {product.colors?.length > 0 && (
            <div className="mb-4">
              <label className="block font-medium mb-1">Color</label>
              <select className="border p-2 rounded">
                {product.colors.map((color) => (
                  <option key={color}>{color}</option>
                ))}
              </select>
            </div>
          )}

          <button className="mt-4 bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition">
            Add to Cart
          </button>
        </div>
      </div>
      <Link href="/" className="block mt-8 text-blue-600 hover:underline">
        ← Back to home
      </Link>
    </div>
  );
}
