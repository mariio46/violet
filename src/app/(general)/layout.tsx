import Navigation from '@/components/navigation';
import { Children } from '@/types';

export default function Layout({ children }: Children) {
    return (
        <>
            <Navigation />
            <main className='mx-auto min-h-screen max-w-screen-2xl'>{children}</main>
        </>
    );
}
