import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const shipping =
    request.cookies.get("bossloot-demo-shipping")?.value === "complete";
  const payment =
    request.cookies.get("bossloot-demo-payment")?.value === "complete";
  let destination: string | undefined;
  if (path === "/checkout") destination = "/checkout/shipping";
  else if (path !== "/checkout/shipping" && !shipping)
    destination = "/checkout/shipping";
  else if (path === "/checkout/review" && !payment)
    destination = "/checkout/payment";
  if (destination)
    return NextResponse.redirect(new URL(destination, request.url));
  return NextResponse.next();
}
export const config = { matcher: ["/checkout/:path*"] };
