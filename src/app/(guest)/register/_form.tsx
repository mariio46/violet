'use client';

import { Button, buttonVariants } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import useLoading from '@/hooks/useLoading';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { SyntheticEvent, useState } from 'react';

export default function RegisterForm() {
    const { loading, startLoading, stopLoading } = useLoading();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();
    const { toast } = useToast();

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();
        startLoading();
        if (password !== passwordConfirmation) {
            return (
                toast({
                    title: 'Invalid Password',
                    description: 'Your password doesnt match with the password confirmation.',
                    icon: 'IconCircleX',
                    className: 'text-red-500',
                }),
                stopLoading()
            );
        }
        try {
            await axios.post('/api/auth/register', {
                name: name,
                email: email,
                password: password,
            });
            toast({
                title: 'Register Successfully',
                description: 'Your credentials has been stored to the server, now lets login!',
            });
            router.push('/login');
        } catch (err: any) {
            setError(err.message);
        } finally {
            stopLoading();
        }
    };
    return (
        <form onSubmit={submit}>
            <div className='mt-4 space-y-2'>
                <Label htmlFor='name'>Name</Label>
                <Input
                    id='name'
                    name='name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    type='text'
                />
            </div>
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
            <div className='mt-4 space-y-2'>
                <Label htmlFor='password_confirmation'>Confirm Password</Label>
                <Input
                    id='password_confirmation'
                    name='password_confirmation'
                    value={passwordConfirmation}
                    onChange={(e) => setPasswordConfirmation(e.target.value)}
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
                    {loading ? 'Registering...' : 'Register'}
                </Button>
                <Link href='/login' className={buttonVariants({ variant: 'ghost' })}>
                    Login?
                </Link>
            </div>
        </form>
    );
}
