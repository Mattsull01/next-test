import NextAuth from "next-auth";
import Providers from "next-auth/providers";

const options = {
  site: process.env.SITE || "http://localhost:3000",

  // Configure one or more authentication providers
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],

  database: {
    type: "mongodb",
    url: process.env.AUTH_DATABASE_URL,
    useNewUrlParser: true,
    synchronize: true,
    logging: true,
  },
};

export default (req, res) => NextAuth(req, res, options);
