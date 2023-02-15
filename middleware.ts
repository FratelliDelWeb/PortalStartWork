import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { verify } from "./lib/jwt";
const secret = process.env.JWT_KEY;

export default async function middleware(req: NextRequest) {
    console.log('**LOG** Middleware - Init')
    const jwt = req.cookies.get("jwt");
    const {pathname} = req.nextUrl;
    console.log('On Path => ' + pathname)

    if (pathname.startsWith("/api") && !pathname.endsWith("/login") && !pathname.endsWith("/register")) {
        console.log("Middleware - Entered in private route")
        console.log("Middleware - JWT => ")
        console.log(jwt)
      if (jwt === undefined) {
        req.nextUrl.pathname = "/login";
        return NextResponse.redirect(req.nextUrl);
      }

      try {
        await verify(jwt.value, secret);
        console.log("Middleware - Ready to next")
        return NextResponse.next();
      } catch (error) {
        console.log(error)
        req.nextUrl.pathname = "/login";
        return NextResponse.redirect(req.nextUrl);
      }
    }
  
    return NextResponse.next();
  }