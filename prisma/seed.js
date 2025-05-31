const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding database...");

  // Create Users
  const user = await prisma.user.create({
    data: {
      name: "John Doe",
      email: "john@example.com",
      password: "hashed-password", // Replace with real hashed password in real apps
      role: "CUSTOMER",
    },
  });

  // Create Products
  const products = await prisma.product.createMany({
    data: [
      {
        title: "Wireless Headphones",
        description: "Noise cancelling over-ear headphones",
        price: 129.99,
        category: "Electronics",
        image: "https://via.placeholder.com/300",
        stock: 50,
      },
      {
        title: "Running Shoes",
        description: "Comfortable and lightweight running shoes",
        price: 89.99,
        category: "Footwear",
        image: "https://via.placeholder.com/300",
        stock: 75,
      },
      {
        title: "Smart Watch",
        description: "Track your health and notifications on the go",
        price: 199.99,
        category: "Wearables",
        image: "https://via.placeholder.com/300",
        stock: 30,
      },
    ],
  });

  console.log("✅ Seeded users and products!");
}

main()
  .catch((e) => {
    console.error("❌ Error seeding:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
