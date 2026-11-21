import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { chromium } from "@playwright/test";

const baseURL = process.env.TEST_BASE_URL || "http://localhost:3010";
for (const namespace of ["common", "landing", "admin", "cart", "store", "blog"]) {
  const keys = locale => Object.keys(JSON.parse(readFileSync(new URL(`../src/messages/${locale}/${namespace}.json`, import.meta.url), "utf8"))).sort();
  assert.deepEqual(keys("ar"), keys("en"), `${namespace}: Arabic keys`);
  assert.deepEqual(keys("fr"), keys("en"), `${namespace}: French keys`);
}
const browser = await chromium.launch({ headless: true, channel: process.env.PLAYWRIGHT_CHANNEL || "msedge" });
const copy = {
  en: { language: "Language", home: "A place for every player.", cart: "Your cart", payment: "Choose how you pay.", review: "One last look at your loadout.", done: "You're all set, player.", required: "Email is required" },
  ar: { language: "اللغة", home: "مكان لكل لاعب.", cart: "سلة التسوق", payment: "اختر كيف تدفع.", review: "نظرة أخيرة على تجهيزاتك.", done: "كل شيء جاهز أيها اللاعب.", required: "البريد الإلكتروني مطلوب" },
  fr: { language: "Langue", home: "Une place pour chaque joueur.", cart: "Votre panier", payment: "Choisissez votre mode de paiement.", review: "Un dernier regard sur votre équipement.", done: "Tout est prêt, joueur.", required: "L’e-mail est obligatoire" },
};
const errors = [];
try {
  for (const locale of ["en", "ar", "fr"]) {
    const context = await browser.newContext();
    await context.addCookies([{ name: "bossloot-locale", value: locale, url: baseURL }]);
    const page = await context.newPage();
    page.on("pageerror", error => errors.push(`${locale}: ${error.message}`));
    page.on("console", message => {
      if (message.type() === "error" && /MISSING_MESSAGE|FORMATTING_ERROR|hydration|INVALID_MESSAGE/.test(message.text())) errors.push(message.text());
    });
    const expected = copy[locale];
    await page.goto(baseURL);
    await page.getByText(expected.home, { exact: true }).waitFor();
    await page.setViewportSize({ width: 390, height: 844 });
    assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth + 1), `${locale}: mobile landing overflow`);
    await page.setViewportSize({ width: 1280, height: 800 });
    assert.equal(await page.locator("html").getAttribute("dir"), locale === "ar" ? "rtl" : "ltr");
    await page.goto(`${baseURL}/cart`);
    await page.getByRole("heading", { name: expected.cart, exact: false }).waitFor();
    await page.goto(`${baseURL}/checkout/shipping`);
    for (const [name, value] of Object.entries({ firstName: "Alex", lastName: "Test", email: "test@example.com", address: "123 Example Street", city: "Paris", zipCode: "75001", country: "France" })) {
      await page.locator(`[name="${name}"]`).fill(value);
    }
    await page.locator('#shipping-form button[type="submit"]').click();
    await page.waitForURL("**/checkout/payment");
    await page.getByRole("heading", { name: expected.payment, exact: true }).waitFor();
    await page.getByRole("radio").first().click();
    await page.locator("section").filter({ has: page.getByRole("heading", { name: expected.payment }) }).getByRole("button").last().click();
    await page.waitForURL("**/checkout/review");
    await page.getByRole("heading", { name: expected.review }).waitFor();
    await page.getByRole("checkbox").check();
    await page.locator('section button').last().click();
    await page.getByRole("heading", { name: expected.done, exact: true }).waitFor();
    await page.goto(`${baseURL}/login`);
    await page.locator('button[type="submit"]').click();
    await page.getByRole("alert").filter({ hasText: expected.required }).waitFor();
    console.log(`${locale}: landing, cart, shipping, payment, review, demo order, validation passed`);
    await context.close();
  }

  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto(`${baseURL}/products?platform=pc&search=mouse`);
  for (const [locale, name, current] of [["ar", "العربية", "en"], ["fr", "Français", "ar"], ["en", "English", "fr"]]) {
    const trigger = page.locator("header").getByRole("button", { name: copy[current].language, exact: true });
    await trigger.focus();
    await page.keyboard.press("Enter");
    await page.getByRole("menuitemradio", { name: new RegExp(name) }).click();
    await page.waitForFunction(value => document.documentElement.lang === value, locale);
    assert.match(page.url(), /platform=pc&search=mouse/);
    await page.reload();
    assert.equal(await page.locator("html").getAttribute("lang"), locale);
  }
  await context.close();
  assert.deepEqual(errors, []);
  console.log("Dropdown keyboard access, persistence, query preservation and hydration passed");
} finally {
  await browser.close();
}
