export const frontURL =
  process.env.NODE_ENV === "development"
    ? process.env.NEXT_PUBLIC_FRONT_URL
    : process.env.NEXT_PRODUCTION_FRONT_URL;
