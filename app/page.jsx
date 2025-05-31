// app/page.tsx
import Link from "next/link";
import Image from "next/image";

async function getProducts() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
}

export default async function HomePage() {
  const products = await getProducts();

  return (
    <main className="p-6">
      {/* Hero Section */}
      <section className="bg-gray-100 p-10 rounded-xl text-center">
        <h1 className="text-4xl font-bold mb-4">Discover Premium Garments</h1>
        <p className="text-lg mb-6">Stylish. Affordable. Comfortable.</p>
        <Link
          href="/category/men"
          className="inline-block bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition"
        >
          Shop Now
        </Link>
      </section>

      {/* Featured Products */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/product/${product.id}`}
              className="border p-4 rounded-lg hover:shadow-lg transition"
            >
              <div className="relative w-full h-60 mb-4">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover rounded"
                />
              </div>
              <h3 className="text-lg font-medium">{product.title}</h3>
              <p className="text-gray-700">${product.price.toFixed(2)}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
