import Link from "next/link";
import { notFound } from "next/navigation";

const pages: Record<string, { title: string; description: string }> = {
  about: {
    title: "About BossLoot",
    description: "A destination for gaming gear, accessories, and gaming culture. More about our store is coming soon.",
  },
  contact: {
    title: "Contact Us",
    description: "Our customer support details and contact form will be available here soon.",
  },
  community: {
    title: "BossLoot Community",
    description: "Our Discord, Facebook, X, Instagram, and Twitch channels will be linked here when they are ready.",
  },
  "shipping-returns": {
    title: "Shipping & Returns",
    description: "Delivery areas, shipping fees, and return instructions will be published here before launch.",
  },
  warranty: {
    title: "Warranty Policy",
    description: "Product warranty coverage and claim instructions will be published here before launch.",
  },
  privacy: {
    title: "Privacy Policy",
    description: "The store's privacy policy will be published here before launch.",
  },
  terms: {
    title: "Terms of Service",
    description: "The store's terms of service will be published here before launch.",
  },
};

export function generateStaticParams() {
  return Object.keys(pages).map((info) => ({ info }));
}

export default async function InformationPage({ params }: { params: Promise<{ info: string }> }) {
  const { info } = await params;
  const page = Object.hasOwn(pages, info) ? pages[info] : undefined;
  if (!page) notFound();

  return (
    <main className="min-h-[60vh] max-w-3xl mx-auto px-5 py-16">
      <p className="text-sm text-purple-400 mb-3">Store preview</p>
      <h1 className="text-4xl font-bold">{page.title}</h1>
      <p className="text-muted-foreground mt-5 leading-relaxed">{page.description}</p>
      <p className="text-sm text-muted-foreground mt-3">This page contains placeholder information.</p>
      <div className="flex flex-wrap gap-4 mt-8">
        <Link href="/products" className="rounded-md bg-primary text-white px-5 py-3">Browse products</Link>
        <Link href="/" className="rounded-md border border_main px-5 py-3">Back to home</Link>
      </div>
    </main>
  );
}
