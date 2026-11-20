import Image from "next/image";
import { AddToCartButton } from "@/components/checkout/add-to-cart-button";
import Link from "next/link";
import type { FC, PropsWithChildren } from "react";
import { ArrowUpRight, ShoppingBag, Star } from "lucide-react";
import type { productType } from "@/types";
import { getProductPrice } from "@/data/products";
import { Badge } from "@/components/ui/primitives/badge";
import { Button } from "@/components/ui/primitives/button";
import WishList from "./WishList";

type Props = productType & { brand?: string; stock?: number; badge?: string };
type ProductCardComponent = FC<PropsWithChildren<Props>> & { AddToCart: FC };
const money = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});
const ProductCard: ProductCardComponent = ({
  id,
  name,
  description,
  price,
  discount,
  image,
  rating,
  reviews,
  brand,
  stock = 1,
  badge,
  children,
}) => (
  <article className="store-ui group flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-border bg-card text-card-foreground transition-[border-color,box-shadow] duration-200 hover:border-purple-400/50 hover:shadow-xl hover:shadow-purple-950/10">
    <div className="relative m-3 overflow-hidden rounded-xl bg-slate-100 dark:bg-[#1b1b25]">
      <Link
        href={`/products/${id}`}
        aria-label={`View ${name}`}
        className="relative block aspect-[4/3] overflow-hidden"
      >
        <Image
          src={image || "/gaming-hero.jpg"}
          alt={name}
          fill
          sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
          className="object-contain p-5 transition-transform duration-300 group-hover:scale-105 motion-reduce:transform-none"
        />
      </Link>
      <div className="pointer-events-none absolute left-3 top-3 flex max-w-[calc(100%-4rem)] flex-wrap gap-1.5">
        {discount > 0 && (
          <Badge className="border-0 bg-purple-600 text-white">
            ?{discount}%
          </Badge>
        )}
        {badge && (
          <Badge
            variant="secondary"
            className="bg-white/90 text-slate-800 dark:bg-[#292937] dark:text-purple-100"
          >
            {badge}
          </Badge>
        )}
      </div>
      <div className="absolute right-2 top-2">
        <WishList />
      </div>
      {stock === 0 && (
        <Badge
          variant="secondary"
          className="absolute bottom-3 left-3 bg-white/95 text-slate-700 dark:bg-zinc-800 dark:text-zinc-200"
        >
          Out of stock
        </Badge>
      )}
    </div>
    <div className="flex flex-1 flex-col px-5 pb-5 pt-2">
      <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
        {brand || "BossLoot selection"}
      </p>
      <Link
        href={`/products/${id}`}
        className="line-clamp-2 min-h-12 text-base font-semibold leading-6 tracking-tight hover:text-purple-500"
      >
        {name}
      </Link>
      <p className="mt-2 line-clamp-2 min-h-10 text-xs leading-5 text-muted-foreground">
        {description}
      </p>
      <div className="mt-4 flex items-center gap-2 text-xs">
        <span className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
          {Array.from({ length: 5 }, (_, index) => (
            <Star
              key={index}
              className={`size-3.5 ${index < rating ? "fill-amber-400 text-amber-400" : "text-slate-300 dark:text-zinc-700"}`}
            />
          ))}
        </span>
        <span className="font-medium">{rating.toFixed(1)}</span>
        <span className="text-muted-foreground">({reviews})</span>
      </div>
      <div className="mt-4 flex flex-wrap items-baseline gap-2">
        <span className="text-2xl font-semibold tracking-tight">
          {money.format(getProductPrice({ price, discount }))}
        </span>
        {discount > 0 && (
          <span className="text-xs text-muted-foreground line-through">
            {money.format(price)}
          </span>
        )}
      </div>
      <div className="mt-auto pt-5">
        {children || (
          <Button
            asChild
            variant="outline"
            className="h-10 w-full rounded-xl border-border bg-transparent"
          >
            <Link href={`/products/${id}`}>
              View product
              <ArrowUpRight className="size-4" />
            </Link>
          </Button>
        )}
        <AddToCartButton productId={id} />
      </div>
    </div>
  </article>
);
ProductCard.AddToCart = function AddToCart() {
  return (
    <Button asChild className="h-10 w-full rounded-xl">
      <Link href="/cart">
        <ShoppingBag className="size-4" />
        View demo cart
      </Link>
    </Button>
  );
};
export default ProductCard;
