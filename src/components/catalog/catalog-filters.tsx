"use client";
import { useStoreCopy } from "@/i18n/use-store-copy";

import { useId, useState } from "react";
import { ChevronDown, SlidersHorizontal } from "lucide-react";
import { brands, categoryOptions, products } from "@/data/products";
import type { CatalogFilters } from "@/lib/catalog-search-params";
import { Checkbox } from "@/components/ui/primitives/checkbox";
import { Input } from "@/components/ui/primitives/input";
import { Label } from "@/components/ui/primitives/label";
import { Button } from "@/components/ui/primitives/button";
import { FilterSelect } from "@/components/catalog/filter-select";

export type FilterUpdate = (values: Partial<CatalogFilters>) => void;
function FilterChoices({
  title,
  options,
  selected,
  onChange,
}: {
  title: string;
  options: { value: string; label: string; count?: number }[];
  selected: string[];
  onChange: (value: string[]) => void;
}) {
  const translate = useStoreCopy();

  const id = useId();
  return (
    <fieldset className="space-y-4 border-t border-border pt-5">
      <legend className="sr-only">{translate(title)}</legend>
      <p aria-hidden="true" className="text-sm font-semibold">
        {translate(title)}
      </p>
      {options.map((option) => (
        <div key={option.value} className="flex items-center gap-3">
          <Checkbox
            id={`${id}-${option.value}`}
            checked={selected.includes(option.value)}
            onCheckedChange={(checked) =>
              onChange(
                checked
                  ? [...selected, option.value]
                  : selected.filter((value) => value !== option.value),
              )
            }
          />
          <Label
            htmlFor={`${id}-${option.value}`}
            className="flex min-w-0 flex-1 cursor-pointer items-center justify-between gap-2 text-sm font-normal leading-5 text-muted-foreground"
          >
            {translate(option.label)}
            {option.count !== undefined && (
              <span className="shrink-0 tabular-nums text-sm">
                {option.count}
              </span>
            )}
          </Label>
        </div>
      ))}
    </fieldset>
  );
}
export function CatalogFilterPanel({
  filters,
  update,
  reset,
}: {
  filters: CatalogFilters;
  update: FilterUpdate;
  reset: () => void;
}) {
  const translate = useStoreCopy();

  const id = useId();
  const [advanced, setAdvanced] = useState(false);
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="flex items-center gap-2 text-sm font-semibold">
          <SlidersHorizontal className="size-4" />
          {translate(" Filters ")}</h2>
        <Button
          variant="link"
          size="sm"
          onClick={reset}
          className="h-auto p-0 text-sm text-purple-500"
        >
          {translate(" Reset all ")}</Button>
      </div>
      <FilterChoices
        title={translate("Category")}
        options={categoryOptions.map((category) => ({
          ...category,
          count: products.filter(
            (product) => product.catalogCategory === category.value,
          ).length,
        }))}
        selected={filters.category}
        onChange={(category) => update({ category })}
      />
      <FilterChoices
        title={translate("Brand")}
        options={brands.map((brand) => ({ value: brand, label: brand }))}
        selected={filters.brand}
        onChange={(brand) => update({ brand })}
      />
      <fieldset className="space-y-4 border-t border-border pt-5">
        <legend className="sr-only">{translate("Price range")}</legend>
        <p aria-hidden="true" className="text-sm font-semibold">
          {translate(" Price range ")}</p>
        <div className="grid grid-cols-2 gap-3">
          <div className="min-w-0 space-y-2">
            <Label
              htmlFor={`${id}-min`}
              className="text-sm text-muted-foreground"
            >
              {translate(" Min ($) ")}</Label>
            <Input
              id={`${id}-min`}
              type="number"
              min={0}
              step="0.01"
              value={filters.min || ""}
              placeholder={translate("0")}
              onChange={(event) =>
                update({ min: Math.max(0, Number(event.target.value)) })
              }
            />
          </div>
          <div className="min-w-0 space-y-2">
            <Label
              htmlFor={`${id}-max`}
              className="text-sm text-muted-foreground"
            >
              {translate(" Max ($) ")}</Label>
            <Input
              id={`${id}-max`}
              type="number"
              min={0}
              step="0.01"
              value={filters.max || ""}
              placeholder={translate("Any")}
              onChange={(event) =>
                update({ max: Math.max(0, Number(event.target.value)) })
              }
            />
          </div>
        </div>
        {filters.max > 0 && filters.min > filters.max && (
          <p role="alert" className="text-sm text-red-400">
            {translate(" Maximum must be at least the minimum. ")}</p>
        )}
      </fieldset>
      <div className="space-y-4 border-t border-border pt-5">
        <div className="flex items-center gap-3">
          <Checkbox
            id={`${id}-stock`}
            checked={filters.stock}
            onCheckedChange={(checked) => update({ stock: checked === true })}
          />
          <Label htmlFor={`${id}-stock`} className="text-sm font-normal">
            {translate(" In stock only ")}</Label>
        </div>
        <div className="flex items-center gap-3">
          <Checkbox
            id={`${id}-deals`}
            checked={filters.deals || filters.category.includes("specials")}
            onCheckedChange={(checked) =>
              update({
                deals: checked === true,
                category: filters.category.filter(
                  (value) => value !== "specials",
                ),
              })
            }
          />
          <Label htmlFor={`${id}-deals`} className="text-sm font-normal">
            {translate(" On sale ")}</Label>
        </div>
      </div>
      <div className="border-t border-border pt-5">
        <Button
          variant="outline"
          className="w-full justify-between rounded-md border-purple-400/30 bg-purple-500/5"
          aria-expanded={advanced}
          aria-controls={`${id}-advanced`}
          onClick={() => setAdvanced(!advanced)}
        >
          <span className="flex items-center gap-2">
            <SlidersHorizontal className="size-4" />
            {translate(" Advanced filters ")}</span>
          <ChevronDown
            className={`size-4 transition-transform ${advanced ? "rotate-180" : ""}`}
          />
        </Button>
        <div
          id={`${id}-advanced`}
          hidden={!advanced}
          className="mt-5 space-y-5"
        >
          <div className="space-y-2">
            <Label
              htmlFor={`${id}-rating`}
              className="text-sm text-muted-foreground"
            >
              {translate(" Minimum rating ")}</Label>
            <FilterSelect
              id={`${id}-rating`}
              value={filters.rating}
              onValueChange={(value) => update({ rating: Number(value) })}
              options={[
                { value: "0", label: "Any rating" },
                { value: "4", label: "4 stars & up" },
                { value: "5", label: "5 stars" },
              ]}
            />
          </div>
          <div className="space-y-2">
            <Label
              htmlFor={`${id}-connection`}
              className="text-sm text-muted-foreground"
            >
              {translate(" Connection ")}</Label>
            <FilterSelect
              id={`${id}-connection`}
              value={filters.connectivity}
              onValueChange={(value) =>
                update({
                  connectivity: value as CatalogFilters["connectivity"],
                })
              }
              options={[
                { value: "all", label: "Any connection" },
                { value: "wired", label: "Wired" },
                { value: "wireless", label: "Wireless" },
              ]}
            />
          </div>
          <div className="space-y-2">
            <Label
              htmlFor={`${id}-platform`}
              className="text-sm text-muted-foreground"
            >
              {translate(" Platform ")}</Label>
            <FilterSelect
              id={`${id}-platform`}
              value={filters.platform}
              onValueChange={(value) =>
                update({ platform: value as CatalogFilters["platform"] })
              }
              options={[
                { value: "all", label: "Any platform" },
                { value: "pc", label: "PC" },
                { value: "console", label: "Console" },
                { value: "universal", label: "Universal" },
              ]}
            />
          </div>
        </div>
      </div>
      <p className="border-t border-border pt-4 text-sm leading-5 text-muted-foreground">
        {translate(" Explore with sample products and demo availability. ")}</p>
    </div>
  );
}
