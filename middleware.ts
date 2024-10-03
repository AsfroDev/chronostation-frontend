import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken, isTokenValid } from "./services/auth"; // Importando a função de validação do token

const RESTRICTED_PUBLIC_PATHS = ["/login", "/signup", "/forgot-password"];

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Adicionando await para obter o token corretamente
  const token = await getToken(); 
  const isLoggedIn = isTokenValid(token);

  if (isLoggedIn && RESTRICTED_PUBLIC_PATHS.includes(pathname)) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (!isLoggedIn && !RESTRICTED_PUBLIC_PATHS.includes(pathname)) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/((?!api|_next/static|_next/image|favicon.ico).*)",
};
