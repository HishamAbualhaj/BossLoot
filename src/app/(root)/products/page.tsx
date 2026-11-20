"use client";
import Link from "next/link";
import { debounce, useQueryStates } from "nuqs";
import { ArrowRight, ChevronLeft, ChevronRight, PackageSearch, Search, SlidersHorizontal, X } from "lucide-react";
import { products, categoryOptions } from "@/data/products";
import { catalogSearchParams, type CatalogFilters } from "@/lib/catalog-search-params";
import { filterProducts, PAGE_SIZE } from "@/lib/catalog";
import ProductCard from "@/components/ui/ProductCard";
import { CatalogFilterPanel } from "@/components/catalog/catalog-filters";
import { Button } from "@/components/ui/primitives/button";
import { Input } from "@/components/ui/primitives/input";
import { Badge } from "@/components/ui/primitives/badge";
import { FilterSelect } from "@/components/catalog/filter-select";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetTrigger, SheetClose } from "@/components/ui/primitives/sheet";

export default function ProductsPage() {
  const [filters, setFilters] = useQueryStates(catalogSearchParams, { history: "push", shallow: true, scroll: false });
  const update = (values: Partial<CatalogFilters>) => { void setFilters({ ...values, page: 1 }); };
  const reset = () => { void setFilters(null); };
  const filtered = filterProducts(products, filters);
  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = Math.max(1, Math.min(pageCount, filters.page));
  const visible = filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);
  const chips: { label: string; remove: () => void }[] = [
    ...filters.category.map((value) => ({ label: categoryOptions.find((category) => category.value === value)?.label || (value === "specials" ? "Specials" : value), remove: () => update({ category: filters.category.filter((category) => category !== value) }) })),
    ...filters.brand.map((value) => ({ label: value, remove: () => update({ brand: filters.brand.filter((brand) => brand !== value) }) })),
    ...(filters.min > 0 ? [{ label: `From $${filters.min}`, remove: () => update({ min: 0 }) }] : []),
    ...(filters.max > 0 ? [{ label: `Up to $${filters.max}`, remove: () => update({ max: 0 }) }] : []),
    ...(filters.stock ? [{ label: "In stock", remove: () => update({ stock: false }) }] : []),
    ...(filters.deals ? [{ label: "On sale", remove: () => update({ deals: false }) }] : []),
    ...(filters.rating > 0 ? [{ label: `${filters.rating}+ stars`, remove: () => update({ rating: 0 }) }] : []),
    ...(filters.connectivity !== "all" ? [{ label: filters.connectivity, remove: () => update({ connectivity: "all" }) }] : []),
    ...(filters.platform !== "all" ? [{ label: filters.platform, remove: () => update({ platform: "all" }) }] : []),
  ];
  return <main className="store-ui min-h-screen bg-slate-50 text-foreground dark:bg-background">
    <section className="border-b border-border bg-white dark:bg-[#111118]"><div className="mx-auto max-w-[1440px] px-5 pb-9 pt-7 sm:px-8"><nav aria-label="Breadcrumb" className="mb-7 flex items-center gap-2 text-[11px] text-muted-foreground"><Link href="/" className="hover:text-primary">Home</Link><ChevronRight className="size-3" /><span>Shop all</span></nav><div className="flex flex-wrap items-end justify-between gap-6"><div><Badge variant="outline" className="mb-4 border-purple-500/25 bg-purple-500/5 text-[10px] uppercase tracking-widest text-purple-600 dark:text-purple-300">THE BOSSLOOT COLLECTION</Badge><h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Your next <span className="text-purple-500">advantage.</span></h1><p className="mt-3 max-w-lg text-sm leading-6 text-muted-foreground">Better gear. Better game. Find the perfect addition to your setup.</p></div><div className="text-xs text-muted-foreground"><span className="text-lg font-semibold text-foreground">{products.length}</span> pieces of possibility</div></div></div></section>
    <div className="mx-auto max-w-[1440px] px-5 py-8 sm:px-8"><div className="grid gap-8 lg:grid-cols-[230px_minmax(0,1fr)] xl:gap-10">
      <aside aria-label="Product filters" className="hidden self-start rounded-2xl border border-border bg-card p-5 lg:block"><CatalogFilterPanel filters={filters} update={update} reset={reset} /></aside>
      <section className="min-w-0" aria-label="Products"><div className="flex flex-wrap items-center gap-3"><div className="relative min-w-[180px] flex-1"><Search className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" /><Input aria-label="Search products" type="search" placeholder="Search your next upgrade..." value={filters.search} onChange={(event) => { void setFilters({ search: event.target.value, page: 1 }, { history: "replace", limitUrlUpdates: debounce(300) }); }} className="h-11 rounded-md bg-card pl-10" /></div><div className="flex items-center gap-2"><label htmlFor="sort" className="hidden text-xs text-muted-foreground sm:block">Sort by</label><FilterSelect id="sort" value={filters.sort} onValueChange={(value) => update({ sort: value as CatalogFilters["sort"] })} label="Sort products" options={[{"value": "featured", "label": "Featured"}, {"value": "price-asc", "label": "Price: low to high"}, {"value": "price-desc", "label": "Price: high to low"}, {"value": "rating", "label": "Top rated"}, {"value": "newest", "label": "Newest"}]} /></div><Sheet><SheetTrigger asChild><Button variant="outline" className="h-11 rounded-xl bg-card lg:hidden"><SlidersHorizontal className="size-4" />Filters{chips.length > 0 && <span>({chips.length})</span>}</Button></SheetTrigger><SheetContent side="left" className="store-ui w-[min(90vw,360px)] overflow-y-auto bg-card text-foreground"><SheetHeader><SheetTitle>Find your next upgrade</SheetTitle><SheetDescription>Combine filters to explore the demo collection.</SheetDescription></SheetHeader><div className="p-5"><CatalogFilterPanel filters={filters} update={update} reset={reset} /></div><div className="sticky bottom-0 border-t border-border bg-card p-4"><SheetClose asChild><Button className="w-full">Show {filtered.length} results<ArrowRight className="size-4" /></Button></SheetClose></div></SheetContent></Sheet></div>
        <div className="my-5 flex flex-wrap items-center justify-between gap-3"><p aria-live="polite" className="text-xs text-muted-foreground">Showing <span className="font-medium text-foreground">{filtered.length === 0 ? 0 : (currentPage - 1) * PAGE_SIZE + 1}?{Math.min(currentPage * PAGE_SIZE, filtered.length)}</span> of <span className="font-medium text-foreground">{filtered.length}</span> products</p><p className="text-[10px] text-muted-foreground">A little upgrade goes a long way.</p></div>
        {chips.length > 0 && <div className="mb-5 flex flex-wrap items-center gap-2">{chips.map((chip) => <button key={chip.label} type="button" onClick={chip.remove} aria-label={`Remove ${chip.label} filter`} className="inline-flex min-h-8 items-center gap-2 rounded-full border border-purple-400/25 bg-purple-500/5 px-3 text-[11px] text-purple-700 dark:text-purple-200">{chip.label}<X className="size-3" /></button>)}<Button variant="link" size="sm" onClick={reset} className="text-xs text-muted-foreground">Clear all</Button></div>}
        {visible.length ? <div className="grid items-stretch gap-5 sm:grid-cols-2 xl:grid-cols-3">{visible.map((product) => <ProductCard key={product.id} {...product} />)}</div> : <div className="flex min-h-80 flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-card px-5 text-center"><PackageSearch className="mb-5 size-10 text-purple-400" /><h2 className="text-xl font-semibold">No loot found this time.</h2><p className="mt-2 max-w-sm text-sm text-muted-foreground">Try a different search or remove a few filters to find your next upgrade.</p><Button variant="outline" onClick={reset} className="mt-6">Reset search & filters</Button></div>}
        {pageCount > 1 && <nav aria-label="Product pagination" className="mt-8 flex items-center justify-between gap-3 border-t border-border pt-6"><span className="text-xs text-muted-foreground">Page {currentPage} of {pageCount}</span><div className="flex gap-2"><Button variant="outline" size="icon" aria-label="Previous page" disabled={currentPage === 1} onClick={() => { void setFilters({ page: currentPage - 1 }); }}><ChevronLeft className="size-4" /></Button>{Array.from({ length: pageCount }, (_, index) => <Button key={index} variant={currentPage === index + 1 ? "default" : "outline"} size="icon" aria-label={`Page ${index + 1}`} aria-current={currentPage === index + 1 ? "page" : undefined} onClick={() => { void setFilters({ page: index + 1 }); }}>{index + 1}</Button>)}<Button variant="outline" size="icon" aria-label="Next page" disabled={currentPage === pageCount} onClick={() => { void setFilters({ page: currentPage + 1 }); }}><ChevronRight className="size-4" /></Button></div></nav>}
      </section>
    </div></div>
  </main>;
}
