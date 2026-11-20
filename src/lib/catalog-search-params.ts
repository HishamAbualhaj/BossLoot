import {
  parseAsArrayOf,
  parseAsBoolean,
  parseAsFloat,
  parseAsInteger,
  parseAsString,
  parseAsStringLiteral,
  type inferParserType,
} from "nuqs/server";
export const sortOptions = [
  "featured",
  "price-asc",
  "price-desc",
  "rating",
  "newest",
] as const;
export const catalogSearchParams = {
  search: parseAsString.withDefault(""),
  category: parseAsArrayOf(parseAsString).withDefault([]),
  brand: parseAsArrayOf(parseAsString).withDefault([]),
  min: parseAsFloat.withDefault(0),
  max: parseAsFloat.withDefault(0),
  rating: parseAsInteger.withDefault(0),
  stock: parseAsBoolean.withDefault(false),
  deals: parseAsBoolean.withDefault(false),
  connectivity: parseAsStringLiteral([
    "all",
    "wired",
    "wireless",
  ] as const).withDefault("all"),
  platform: parseAsStringLiteral([
    "all",
    "pc",
    "console",
    "universal",
  ] as const).withDefault("all"),
  sort: parseAsStringLiteral(sortOptions).withDefault("featured"),
  page: parseAsInteger.withDefault(1),
};
export type CatalogFilters = inferParserType<typeof catalogSearchParams>;
