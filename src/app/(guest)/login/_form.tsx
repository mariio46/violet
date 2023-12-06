'use client';

import { Button, buttonVariants } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import useLoading from '@/hooks/useLoading';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { SyntheticEvent, useState } from 'react';

export default function LoginForm() {
    const { loading, startLoading, stopLoading } = useLoading();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();
    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get('callbackUrl') || '/dashboard';

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();
        try {
            startLoading();
            const res = await signIn('credentials', {
                redirect: false,
                email,
                password,
                callbackUrl,
            });
            if (!res?.error) {
                router.push(callbackUrl);
                router.refresh();
            } else {
                setError('Your credentials is invalid!');
            }
        } catch (e: any) {
            console.log(e.message);
        } finally {
            stopLoading();
        }
    };
    return (
        <form onSubmit={submit}>
            <div className='mt-4 space-y-2'>
                <Label htmlFor='email'>Email</Label>
                <Input
                    id='email'
                    name='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    type='email'
                />
            </div>
            <div className='mt-4 space-y-2'>
                <Label htmlFor='password'>Password</Label>
                <Input
                    id='password'
                    name='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    type='password'
                />
            </div>
            {error && (
                <div className='mt-4 rounded-lg bg-red-100 p-2'>
                    <p className='text-xs text-destructive'>{error}</p>
                </div>
            )}
            <div className='flex flex-col gap-2'>
                <Button className='mt-6 w-full' type='submit' disabled={loading}>
                    {!loading ? 'Login' : 'Login...'}
                </Button>
                <Link href='/register' className={buttonVariants({ variant: 'ghost' })}>
                    Register?
                </Link>
            </div>
        </form>
    );
}
