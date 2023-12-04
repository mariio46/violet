import Link from 'next/link';
import NavigationLink from './navigation-link';
import { buttonVariants } from './ui/button';
import { Separator } from './ui/separator';
import NavigationDropdown from './navigation-dropdown';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { Login, Register } from './auth';

export default async function Navigation() {
    const session = await getServerSession(authOptions);
    return (
        <nav className='relative z-20 mx-auto hidden max-w-screen-2xl items-center justify-between border-b px-4 py-3 md:flex lg:px-8 lg:py-4'>
            <Link href='/'>
                <span className='text-2xl font-bold text-primary'>Violet</span>
            </Link>
            <div>
                <div className='flex items-center'>
                    <ul className='flex items-center gap-x-4'>
                        <NavigationLink scroll={false} href='/'>
                            Home
                        </NavigationLink>
                        <NavigationLink scroll={false} href='/about'>
                            About
                        </NavigationLink>
                    </ul>
                    <Separator orientation='vertical' className='ml-6 mr-4 h-8 w-[1px] shrink-0 bg-slate-500/20' />

                    <div className='flex items-center gap-x-4'>
                        {!!session ? (
                            // @ts-ignore
                            <NavigationDropdown user={session?.user} />
                        ) : (
                            <>
                                <Login />
                                <Register />
                            </>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}
