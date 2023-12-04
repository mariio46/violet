'use client';

import { Children } from '@/types';
import { SessionProvider as Session } from 'next-auth/react';

export default function SessionProvider({ children }: Children) {
    return <Session>{children}</Session>;
}
