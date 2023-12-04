import Navigation from '@/components/navigation';
import { SideNavigation } from '@/components/side-navigation';
import { Children } from '@/types';

const sidebarNavItems = [
    {
        title: 'Profile',
        href: '#',
    },
    {
        title: 'Account',
        href: '#',
    },
    {
        title: 'Appearance',
        href: '#',
    },
    {
        title: 'Notifications',
        href: '#',
    },
    {
        title: 'Display',
        href: '#',
    },
];

export default function Layout({ children }: Children) {
    return (
        <>
            <Navigation />
            <div className='hidden space-y-6 p-10 pb-16 md:block'>
                <div className='flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0'>
                    <aside className='-mx-4 lg:w-1/5'>
                        <SideNavigation items={sidebarNavItems} />
                    </aside>
                    <div className='flex-1 lg:max-w-2xl'>{children}</div>
                </div>
            </div>
            {/* <main className='mx-auto min-h-screen max-w-screen-2xl'>{children}</main> */}
        </>
    );
}
