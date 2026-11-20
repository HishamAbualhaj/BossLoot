const baseProducts = [
  {
    id: 1,
    name: "Gaming Headset",
    description: "High-quality surround sound with noise-canceling mic.",
    price: 79.99,
    discount: 20, // percentage
    image: "/headphone_1.png",
    category: ["Accessories"],
    rating: 4,
    reviews: 120,
  },
  {
    id: 2,
    name: "Mechanical Keyboard",
    description: "RGB backlit, blue switches, built for speed and durability.",
    price: 129.99,
    discount: 15,
    image: "/gaming-hero.jpg",
    category: ["Keyboards"],
    rating: 4,
    reviews: 250,
  },
  {
    id: 3,
    name: "Gaming Mouse",
    description: "Ergonomic design with customizable DPI and RGB lights.",
    price: 59.99,
    discount: 10,
    image: "/mouse.png",
    category: ["Accessories"],
    rating: 5,
    reviews: 300,
  },
  {
    id: 4,
    name: "4K Gaming Monitor",
    description: "Ultra HD resolution, 144Hz refresh rate, HDR support.",
    price: 499.99,
    discount: 25,
    image: "/gaming-hero.jpg",
    category: ["Monitors"],
    rating: 5,
    reviews: 85,
  },
  {
    id: 5,
    name: "Gaming Chair",
    description:
      "Ergonomic design with lumbar support and adjustable armrests.",
    price: 199.99,
    discount: 18,
    image: "/gaming-hero.jpg",
    category: ["Chairs"],
    rating: 4,
    reviews: 150,
  },
  {
    id: 6,
    name: "Streaming Microphone",
    description: "Studio-quality sound with USB plug-and-play setup.",
    price: 99.99,
    discount: 12,
    image: "/headphone_1.png",
    category: ["Accessories"],
    rating: 5,
    reviews: 200,
  },
  {
    id: 7,
    name: "Graphics Card RTX 4080",
    description: "High-performance GPU for 4K gaming and rendering.",
    price: 1199.99,
    discount: 20,
    image: "/gaming-hero.jpg",
    category: ["Components"],
    rating: 5,
    reviews: 90,
  },
  {
    id: 8,
    name: "Gaming Desk",
    description: "Spacious carbon-fiber surface with cable management system.",
    price: 249.99,
    discount: 15,
    image: "/gaming-hero.jpg",
    category: ["Furniture"],
    rating: 4,
    reviews: 110,
  },
];

export type CatalogCategory = "gaming" | "peripherals" | "games" | "accessories" | "merch";
export type CatalogProduct = (typeof baseProducts)[number] & {
  brand: string; catalogCategory: CatalogCategory; connectivity: "wired" | "wireless" | "none";
  platform: "pc" | "console" | "universal"; stock: number; badge?: string;
};
const details: Pick<CatalogProduct, "brand" | "catalogCategory" | "connectivity" | "platform" | "stock" | "badge">[] = [
  { brand: "HyperX", catalogCategory: "peripherals", connectivity: "wired", platform: "universal", stock: 18, badge: "Bestseller" },
  { brand: "Corsair", catalogCategory: "peripherals", connectivity: "wired", platform: "pc", stock: 12, badge: "New arrival" },
  { brand: "Logitech", catalogCategory: "peripherals", connectivity: "wireless", platform: "pc", stock: 24 },
  { brand: "ASUS", catalogCategory: "gaming", connectivity: "wired", platform: "universal", stock: 5, badge: "Staff pick" },
  { brand: "BossLoot", catalogCategory: "gaming", connectivity: "none", platform: "universal", stock: 0 },
  { brand: "Razer", catalogCategory: "accessories", connectivity: "wired", platform: "pc", stock: 8 },
  { brand: "ASUS", catalogCategory: "gaming", connectivity: "none", platform: "pc", stock: 3, badge: "Premium" },
  { brand: "BossLoot", catalogCategory: "gaming", connectivity: "none", platform: "universal", stock: 7 },
];
export const products: CatalogProduct[] = [
  ...baseProducts.map((product, index) => ({ ...product, ...details[index] })),
  { id: 9, name: "Pro Wireless Controller", description: "Precision controls for your next winning streak.", price: 69.99, discount: 10, image: "/hand.png", category: ["Controllers"], rating: 5, reviews: 76, brand: "Razer", catalogCategory: "gaming", connectivity: "wireless", platform: "console", stock: 14, badge: "New arrival" },
  { id: 10, name: "Adventure Game ? Digital Edition", description: "Your next great adventure. Placeholder digital game.", price: 39.99, discount: 0, image: "/gaming-fps.png", category: ["Games"], rating: 4, reviews: 42, brand: "BossLoot", catalogCategory: "games", connectivity: "none", platform: "pc", stock: 99 },
  { id: 11, name: "BossLoot Player Collection", description: "Everyday essentials, made for life between sessions.", price: 34.99, discount: 0, image: "/setup_gaming.png", category: ["Merchandise"], rating: 4, reviews: 28, brand: "BossLoot", catalogCategory: "merch", connectivity: "none", platform: "universal", stock: 20, badge: "Exclusive" },
  { id: 12, name: "Extended Desk Mat", description: "A smooth, spacious surface for your complete setup.", price: 24.99, discount: 15, image: "/gaming-hero.jpg", category: ["Accessories"], rating: 5, reviews: 63, brand: "SteelSeries", catalogCategory: "accessories", connectivity: "none", platform: "universal", stock: 0 },
];
export function getProductPrice(product: { price: number; discount: number }) {
  return Math.round(product.price * (1 - product.discount / 100) * 100) / 100;
}
export const categoryOptions = [
  { value: "gaming", label: "Gaming gear" }, { value: "peripherals", label: "Peripherals" },
  { value: "games", label: "Games" }, { value: "accessories", label: "Accessories" },
  { value: "merch", label: "Merch & lifestyle" },
];
export const brands = [...new Set(products.map((product) => product.brand))].sort();
