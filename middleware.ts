import { NextRequest, NextResponse } from "next/server"; 
import { getToken } from "next-auth/jwt";

export default async function middleware(req: NextRequest) {
  const {pathname} = req.nextUrl;
  console.log('Middleware - Enter to path : ' + pathname)

    if(pathname.startsWith("/area-privata/")){
      console.log('Middleware - Enter in Private Route')
      const token = await getToken({req});
      console.log("Token Middleware => ", token)
      // redirect user without access to login
    if (token?.token && Date.now() / 1000 < token?.exp) {
      req.nextUrl.pathname = "/login";
      return NextResponse.redirect(req.nextUrl);
    }
      console.log('Middleware - Enter in Private Route - Admin, Basic')
      switch(token?.role){
        case "admin":
        case "Basic":
        break;
        default:
          console.log('...But not an admin or basic user')
          req.nextUrl.pathname = "/login";
          return NextResponse.redirect(req.nextUrl);
      }
    }
    if(pathname.startsWith("/area-privata-candidates/")){
      console.log('Middleware - Enter in Private Route')
      const token = await getToken({req});
      console.log("Token Middleware => ", token)
      // redirect user without access to login
    if (token?.token && Date.now() / 1000 < token?.exp) {
      req.nextUrl.pathname = "/login";
      return NextResponse.redirect(req.nextUrl);
    }
      console.log('Middleware - Enter in Private Route - Candidates')
      if (token?.role !== "candidate") {
          req.nextUrl.pathname = "/login";
          return NextResponse.redirect(req.nextUrl);
      }
    }
    NextResponse.next();
}

  export const config = { matcher : "/((?!.*\\.).*)" } ; 