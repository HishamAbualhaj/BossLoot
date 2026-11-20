import { getProductPrice, type CatalogProduct } from "@/data/products";
import type { CatalogFilters } from "./catalog-search-params";
export const PAGE_SIZE = 6;
export function filterProducts(products: CatalogProduct[], filters: CatalogFilters) {
  const query = filters.search.trim().toLowerCase();
  const filtered = products.filter((product) => {
    const price = getProductPrice(product);
    const categories = filters.category.filter((category) => category !== "specials");
    return (!query || `${product.name} ${product.description} ${product.brand} ${product.category.join(" ")}`.toLowerCase().includes(query))
      && (!categories.length || categories.includes(product.catalogCategory))
      && (!filters.brand.length || filters.brand.includes(product.brand))
      && price >= Math.max(0, filters.min) && (filters.max <= 0 || price <= filters.max)
      && product.rating >= filters.rating && (!filters.stock || product.stock > 0)
      && (!(filters.deals || filters.category.includes("specials")) || product.discount > 0)
      && (filters.connectivity === "all" || product.connectivity === filters.connectivity)
      && (filters.platform === "all" || product.platform === filters.platform);
  });
  switch (filters.sort) {
    case "price-asc": return filtered.sort((a, b) => getProductPrice(a) - getProductPrice(b));
    case "price-desc": return filtered.sort((a, b) => getProductPrice(b) - getProductPrice(a));
    case "rating": return filtered.sort((a, b) => b.rating - a.rating || b.reviews - a.reviews);
    case "newest": return filtered.sort((a, b) => b.id - a.id);
    default: return filtered;
  }
}
