import { middlewareAuth } from "@/auth.config";

export default middlewareAuth;

export const config = {
  matcher: ["/admin/:path*", "/login"],
};
