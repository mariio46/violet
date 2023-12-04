import { Children } from '@/types';

export default function Layout({ children }: Children) {
    return <main className='flex min-h-screen items-center justify-center'>{children}</main>;
}
