import axios from "axios";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  providers: [
    CredentialsProvider({
      id: "login",
      name: "Login",
      authorize: async function (credentials, req) {
        console.log("Sono dentro authorize");
        console.log(credentials);
        console.log(req);
        return (
          axios
            .post(
              `${process.env.NEXT_PUBLIC_API_ENDPOINT}/auth/login`,
              credentials
            )
            .then((response) => {
              return response.data;
            })
            .catch((error) => {
              console.log(error.response);
              throw new Error(error.response.data.message);
            }) || null
        );
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, account }) {
      console.log("Sono in jwt");
      console.log(token);
      console.log(user);
      console.log(account);

      // Initial sign in
      if (account && user) {
        return {
          accessToken: account.access_token,
          accessTokenExpires: Date.now() + account.expires_at * 1000,
          refreshToken: account.refresh_token,
          user,
        };
      }

      // Return previous token if the access token has not expired yet
      if (Date.now() < token.accessTokenExpires) {
        return token;
      }

      // Access token has expired, try to update it
      return refreshAccessToken(token);
    },
    async session({ session, token }) {
      session.user = token.user;
      session.accessToken = token.accessToken;
      session.error = token.error;

      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
});
