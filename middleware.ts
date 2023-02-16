import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { verify } from "./lib/jwt";
const secret = process.env.JWT_KEY;

export default async function middleware(req: NextRequest) {
    console.log('**LOG** Middleware - Init')
    const jwt = req.cookies.get("jwt");
    const {pathname} = req.nextUrl;
    console.log('On Path => ' + pathname)

    if(pathname.startsWith("/api/public")){
      return NextResponse.next();
    } else {
      console.log("Middleware - Not a public route")
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
        console.log("Middleware - JWT Verification Passed - Next")
        return NextResponse.next();
      } catch (error) {
        console.log(error)
        console.log("Middleware - JWT Error - Actual Url => " + req.nextUrl);
        req.nextUrl.pathname = "/api/public/notAuthorized";
        console.log("Middleware - JWT Error - Redirect to => " + req.nextUrl);
        return NextResponse.redirect(req.nextUrl);
      }
    }
    }
  
    return NextResponse.next();
  }