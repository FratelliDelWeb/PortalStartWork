import axios from "axios";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  providers: [
    CredentialsProvider({
      id: "login",
      name: "Login",
      authorize: async function (credentials, req) {
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
      user && (token.user = user.user);
      user && (token.role = user.role);

      return token;
    },
    session: async ({ session, token }) => {
      session.user = {
        user: token.user,
        role: token.role,
      };

      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
  secret: process.env.JWT_KEY,
});
