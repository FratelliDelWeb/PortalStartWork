import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { verify } from "./lib/jwt";
const secret = process.env.JWT_KEY;

export default async function middleware(req: NextRequest) {
    console.log('**LOG** Middleware - Init')
    console.log('Middleware - Request =>')
    const jwt = req.cookies.get("jwt");
    const {pathname} = req.nextUrl;
    console.log('On Path => ' + pathname)

    if(pathname.startsWith("/api/public")){
      return NextResponse.next();
    } else {
      console.log("Middleware - Not a public route");

      if (pathname.endsWith("/delete") || pathname.endsWith("/update")) {
        try {
          
          console.log("Middleware - Entered in private route - List Access : Admin")
          const token = await verify(jwt.value, secret);

          if(token.role === "admin"){
            console.log("Middleware - JWT Verification Passed - Check Role Passed - Next")
            return NextResponse.next();
          } else if(token.role === "Basic"){
            console.log("Middleware - JWT Verification Passed - User Blocked - Redirect to notAuthorized")
            req.nextUrl.pathname = "/api/public/notAuthorized";
            return NextResponse.redirect(req.nextUrl);
          } else {
            console.log("Middleware - JWT Verification Passed - User Blocked - Redirect to notAuthorized");
            req.nextUrl.pathname = "/api/public/notAuthorized";
            return NextResponse.redirect(req.nextUrl);
          }
          
        } catch (error) {
          console.log(error)
          console.log("Middleware - JWT Error - Actual Url => " + req.nextUrl);
          req.nextUrl.pathname = "/api/public/notAuthorized";
          console.log("Middleware - JWT Error - Redirect to => " + req.nextUrl);
          return NextResponse.redirect(req.nextUrl);
        }
      } else if (pathname.startsWith("/api") && !pathname.endsWith("/login") && !pathname.endsWith("/register")) {
        console.log("Middleware - Entered in private route - List Access : User, Admin")

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