import { products, getProductPrice } from "@/data/products";
import type { CartItem } from "@/store/useCheckoutStore";
export const money = (value: number) => new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(value);
export function cartTotals(cart: CartItem[], delivery: "standard" | "express", coupon: string) {
 const items = cart.flatMap((item) => { const product = products.find((product) => product.id === item.productId); return product && product.stock > 0 && item.quantity > 0 ? [{ ...item, product, unitPrice: getProductPrice(product) }] : []; });
 const subtotal = Math.round(items.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0) * 100) / 100;
 const discount = coupon === "LOOT10" ? Math.round(subtotal * 10) / 100 : 0;
 const shipping = !items.length ? 0 : delivery === "express" ? 14.99 : subtotal >= 150 ? 0 : 6.99;
 return { items, subtotal, discount, shipping, total: Math.round((subtotal - discount + shipping) * 100) / 100, count: items.reduce((sum, item) => sum + item.quantity, 0) };
}
export function paymentLabel(method: { option: string } | null, card: { lastFour: string } | null) { return method?.option === "credit" ? `Demo card ending in ${card?.lastFour || "4242"}` : method?.option === "paypal" ? "Demo PayPal account" : method?.option === "crypto" ? "Demo crypto wallet" : "Not selected"; }
