import {SignJWT, jwtVerify, type JWTPayload} from 'jose';

export async function sign(payload: JWTPayload, secret: string): Promise<string> {
    console.log("**LOG** JWT - Sign - Init");

    const iat = Math.floor(Date.now() / 1000);
    const exp = iat + 60* 60; // one hour

    console.log("JWT - Sign - Payload =>")
    console.log(payload)

    const token = await new SignJWT({...payload})
        .setProtectedHeader({alg: 'HS256', typ: 'JWT'})
        .setExpirationTime(exp)
        .setIssuedAt(iat)
        .setNotBefore(iat)
        .sign(new TextEncoder().encode(secret));

    console.log("JWT - Sign - Generated Token =>")
    console.log(token)

    return token;
}

export async function verify(token: string, secret: string): Promise<JWTPayload> {
    console.log("**LOG** JWT - Verify - Init");

    console.log('JWT - Verify - token =>' + token)
    console.log('JWT - Verify - secret =>' + secret)
    const {payload} = await jwtVerify(token, new TextEncoder().encode(secret));
    // run some checks on the returned payload, perhaps you expect some specific values

    // if its all good, return it, or perhaps just return a boolean
    return payload;
}