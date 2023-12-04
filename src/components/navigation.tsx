import Link from 'next/link';
import NavigationLink from './navigation-link';
import { buttonVariants } from './ui/button';
import { Separator } from './ui/separator';
import NavigationDropdown from './navigation-dropdown';

export default function Navigation() {
    return (
        <nav className='relative z-20 mx-auto hidden max-w-screen-2xl items-center justify-between px-4 py-3 md:flex lg:px-8 lg:py-4'>
            <Link href='/'>
                <span className='text-2xl font-bold text-primary'>Violet</span>
            </Link>
            <div>
                <div className='flex items-center'>
                    <ul className='flex items-center gap-x-2'>
                        <NavigationLink href='/'>Home</NavigationLink>
                    </ul>
                    <Separator orientation='vertical' className='ml-6 mr-4 h-8 w-[1px] shrink-0 bg-slate-500/20' />

                    <div className='flex items-center gap-x-4'>
                        <Link href='/login' className={buttonVariants({ variant: 'outline' })}>
                            Login
                        </Link>
                        <Link href='/register' className={buttonVariants({ variant: 'outline' })}>
                            Register
                        </Link>
                        <NavigationDropdown />
                    </div>
                </div>
            </div>
        </nav>
    );
}
