import type { Metadata } from 'next';
import { Figtree } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/components/theme-provider';
import SessionProvider from '@/components/session-provider';
import { Toaster } from '@/components/ui/toaster';

const figtree = Figtree({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: process.env.APP_NAME,
    description: 'Starterkir for NextJS 14 with authentication.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en'>
            <body className={cn(figtree.className, 'font-sans antialiased')}>
                <ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
                    <SessionProvider>{children}</SessionProvider>
                </ThemeProvider>
                <Toaster />
            </body>
        </html>
    );
}
