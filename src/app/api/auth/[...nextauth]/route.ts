import CredentialsProvider from 'next-auth/providers/credentials';
import NextAuth, { type NextAuthOptions } from 'next-auth';
import { PrismaClient } from '@prisma/client';
import { compare } from 'bcrypt';
import { gravatar } from '@/types/avatar';

const prisma = new PrismaClient();

export const authOptions: NextAuthOptions = {
    pages: {
        signIn: '/login',
    },
    session: {
        strategy: 'jwt',
    },
    providers: [
        CredentialsProvider({
            name: 'Sign in',
            credentials: {
                email: {
                    label: 'Email',
                    type: 'email',
                    placeholder: 'jhondoe@example.com',
                },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) return null;

                const user = await prisma.user.findUnique({
                    where: {
                        email: credentials.email,
                    },
                });
                if (!user) return null;

                const isPasswordValid = await compare(credentials.password, user.password);
                if (!isPasswordValid) return null;

                return {
                    id: user.id + '',
                    name: user.name,
                    email: user.email,
                    image: gravatar(user.email),
                    randomKey: '2af6b4cca98b0d18a6f47098c768589059d6ca9ad88ea6d0414f592ca44bbf8e',
                };
            },
        }),
    ],
    callbacks: {
        session: ({ session, token }) => {
            // console.log('Session Callback', { session, token });
            // console.log(
            //     '--------------------------------------------------------------------------------------------------------------------------------------------',
            // );
            return {
                ...session,
                user: {
                    ...session.user,
                    id: token.id,
                    randomKey: token.randomKey,
                },
            };
        },
        jwt: ({ token, user }) => {
            // console.log('JWT Callback', { token, user });
            if (user) {
                const u = user as unknown as any;
                return {
                    ...token,
                    id: u.id,
                    randomKey: u.randomKey,
                };
            }
            return token;
        },
    },
};
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
