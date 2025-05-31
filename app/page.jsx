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
    <main className="p-6 text-white">
      {/* Hero Section */}
      <section
        className="relative bg-gray-800 p-10 rounded-xl text-center text-white bg-cover bg-center overflow-hidden "
        style={{
          backgroundImage:
            "url('https://img.freepik.com/premium-photo/close-up-t-shirts-hangers-apparel-background_51195-3844.jpg?w=740')",
        }}
      >
        <div className="bg-black/60 absolute h-full w-full top-0 left-0" />
        <div className="relative z-10">
          <h1 className="text-4xl font-bold mb-4">Discover Premium Garments</h1>
          <p className="text-lg mb-6 font-medium italic">
            Stylish. Affordable. Comfortable.
          </p>
          <Link
            href="#featured-products"
            className="inline-block bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-full hover:black/70 transition active:scale-95"
          >
            Shop Now
          </Link>
        </div>
      </section>

      {/* Featured Products */}
      <section id="featured-products" className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className="shadow bg-gray-800 p-4 rounded-lg hover:shadow-lg transition "
            >
              <div className="relative w-full h-60 mb-4">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover rounded bg-gray-800"
                />
              </div>
              <h3 className="text-lg font-medium">{product.title}</h3>
              <p className="opacity-70">${product.price.toFixed(2)}</p>
            </Link>
          ))}
        </div>
        <h2 className="text-2xl font-semibold mb-4 mt-10">All Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className="shadow bg-gray-800 p-4 rounded-lg hover:shadow-lg transition"
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
              <p className="opacity-70">${product.price.toFixed(2)}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
