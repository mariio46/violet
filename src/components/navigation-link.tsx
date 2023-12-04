'use client';

import { cn } from '@/lib/utils';
import type { Route } from 'next';
import Link, { LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';

interface NavLinkType extends LinkProps {
    href: Route | URL;
    className?: string;
    children: React.ReactNode;
}

export default function NavigationLink({ href, className, children, ...props }: NavLinkType) {
    const pathname = usePathname();
    const active = pathname === href;
    return (
        <Link
            href={href}
            className={cn(
                'font-semibold text-muted-foreground hover:text-primary',
                active ? 'font-medium text-primary' : '',
                className,
            )}
            {...props}>
            {children}
        </Link>
    );
}
