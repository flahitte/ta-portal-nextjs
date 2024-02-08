// imports
import NextAuth from "next-auth"

// importing providers
// import GithubProvider from "next-auth/providers/github"
import OktaProvider from "next-auth/providers/okta";

const handler = NextAuth({
    providers: [
        // GithubProvider({
        //     clientId: process.env.GITHUB_ID as string,
        //     clientSecret: process.env.GITHUB_SECRET as string,
        // }),
        OktaProvider({
            clientId: process.env.OKTA_OAUTH2_CLIENT_ID as string,
            clientSecret: process.env.OKTA_OAUTH2_CLIENT_SECRET as string,
            issuer: process.env.OKTA_OAUTH2_ISSUER as string
          }),
    ],
    secret: process.env.NEXTAUTH_SECRET as string 
})

export { handler as GET, handler as POST }