import index from "./copy-index.json";
import patterns from "./copy-patterns.json";

type Translator = (
  key: string,
  values?: Record<string, string | number>,
) => string;
const keys: Record<string, string> = index;
const normalize = (value: string) =>
  value
    .replace(/&apos;|&#39;/g, "'")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/\s+/g, " ")
    .trim();
const dynamicPatterns = patterns.map(({ source, key }) => {
  const names = [...source.matchAll(/\{(value\d+)\}/g)].map(
    (match) => match[1],
  );
  const parts = source
    .split(/\{value\d+\}/g)
    .map((part) => part.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  return {
    key,
    names,
    expression: new RegExp("^" + parts.join("(.+?)") + "$"),
  };
});

// Localize display values at the rendering boundary. IDs, URLs, filter values,
// checkout data and third-party brand names retain their original values.
export function createStoreCopy(t: Translator, locale: string) {
  // Pin the numbering system: Node and browsers can choose different defaults
  // for bare "ar", which would otherwise produce a hydration mismatch.
  const numberingSystem = locale === "ar" ? "arab" : "latn";
  const currency = new Intl.NumberFormat(locale, {
    style: "currency",
    currency: "USD",
    numberingSystem,
  });
  const date = new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
    numberingSystem,
  });
  return function copy<T>(value: T): T {
    if (typeof value !== "string") return value;
    const normalized = normalize(value);
    const key = keys[normalized];
    const leading = /^\s/.test(value) ? " " : "";
    const trailing = /\s$/.test(value) ? " " : "";
    if (key) return (leading + t(key) + trailing) as T;
    if (/^\$[\d,]+\.\d{2}$/.test(normalized)) {
      return currency.format(Number(normalized.replace(/[$,]/g, ""))) as T;
    }
    if (/^[A-Z][a-z]{2} \d{1,2}, \d{4}$/.test(normalized)) {
      const parsed = new Date(normalized + " 00:00:00 UTC");
      if (!Number.isNaN(parsed.getTime())) return date.format(parsed) as T;
    }
    for (const pattern of dynamicPatterns) {
      const match = normalized.match(pattern.expression);
      if (match) {
        const values = Object.fromEntries(
          pattern.names.map((name, i) => {
            const captured = match[i + 1];
            return [
              name,
              /^\d+$/.test(captured) ? Number(captured) : copy(captured),
            ];
          }),
        );
        return (leading + t(pattern.key, values) + trailing) as T;
      }
    }
    return value;
  };
}
