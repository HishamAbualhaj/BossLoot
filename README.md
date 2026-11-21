# BossLoot – Next.js App
#### BossLoot is your go-to gaming e-commerce store for rare loot crates, exclusive in-game items, and top-quality gaming gear. We deliver authentic products with a sleek, futuristic style to boost your gaming experience. Level up your play with BossLoot — where every drop is a win!


## Skills
> This still under development, might be changed based on requirements 

* React
* Next
* TailwindCSS
* TanStack Query
* Prisma | Firebase
* Zustand


### Local setup

Use Node.js 22 LTS and npm. Install the locked dependencies with `npm ci`.

### Front-End Scripts
- **Development:** `npm run dev` (http://localhost:3000)
- **Lint:** `npm run lint`
- **Type check:** `npm run typecheck`
- **Production build:** `npm run build`
- **Run production build:** `npm start`

### Current implementation

The project uses the Next.js App Router, React, TypeScript, Tailwind CSS,
Zustand, and Swiper. Existing screens include the landing page, product listing
and details, cart, shipping and payment checkout steps, login/signup, and blog.

Product, cart, and payment data are currently mock data. Customer authentication,
database persistence, real payments, shipping integrations, and an administration
dashboard are not implemented. TanStack Query, Prisma, and Firebase listed above
are potential choices, not installed dependencies.



## Contact
For any questions, feel free to reach out at **hishamraid0@gmail.com**.

### Translations

Internationalization uses next-intl without changing existing URLs. English is
the default; Arabic and French are also supported. The language dropdown saves
a validated, year-long cookie and refreshes the current route. Arabic sets the
document direction to RTL.

Translation files live in `src/messages/{en,ar,fr}/`:

- `common.json`: navigation, search, language selector, and shared labels.
- `landing.json`: landing page translations (currently the hero).
- `admin.json`: starter administration labels for future admin screens.
- `cart.json`: cart page labels.
- `store.json`: shared storefront copy, catalog, forms, checkout, information
  pages, and landing sections.
- `blog.json`: translated article markup maintained as trusted local content.

Server components use `await getTranslations("landing.hero")` from
`next-intl/server`. Client components use `useTranslations("common")` from
`next-intl`. Read strings with `t("key")`. Keep keys in sync across languages.
To add a namespace, create its JSON file in all three language folders and load
it in `src/i18n/request.ts`.

The storefront, product content, blog, information pages, cart, authentication
forms, validation messages and checkout use the selected language. Brand names,
customer names and customer-entered data retain their original spelling.
Arabic uses Noto Sans Arabic and RTL layouts. Currency and dates use the selected
locale with an explicit numbering system to keep server and browser output equal.

Existing display copy uses `useStoreCopy()` in synchronous components or
`await getStoreCopy()` in async server components. These helpers resolve source
labels through `src/i18n/copy-index.json` into the `store` namespace, while leaving
IDs, URLs, saved form values and unknown names intact. When adding a display
label, add its source-to-key mapping and the corresponding key to all three
`store.json` files. Dynamic display patterns live in `copy-patterns.json`;
item counts use ICU plural rules. New features can use named namespace keys
directly with `useTranslations` / `getTranslations`.

With the app running on port 3010, run `node scripts/test-locales.mjs` for the
three-language checkout and language-switching browser checks. Override
`TEST_BASE_URL` and `PLAYWRIGHT_CHANNEL` as needed (the default channel is Edge).
