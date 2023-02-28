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
    jwt: async ({ token, user }) => {
      user && (token.user = user);
      return token;
    },
    session: async ({ session, token }) => {
      session.user = token.user;
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
});
