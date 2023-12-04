'use client';

import { signOut } from 'next-auth/react';
import Link from 'next/link';
import { Icon } from './icon';
import { buttonVariants } from './ui/button';
import { DropdownMenuItem } from './ui/dropdown-menu';

export function Login() {
    return (
        <Link href='/login' className={buttonVariants({ variant: 'outline' })}>
            Login
        </Link>
    );
}

export function Register() {
    return (
        <Link href='/register' className={buttonVariants({ variant: 'outline' })}>
            Register
        </Link>
    );
}

export function Logout() {
    return (
        <DropdownMenuItem onSelect={() => signOut()}>
            <Icon name='IconLogout2' className='mr-2' />
            Logout
        </DropdownMenuItem>
    );
}
