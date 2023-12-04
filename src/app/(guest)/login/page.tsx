import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';

export default function Login() {
    return (
        <div className='mx-auto w-full max-w-md space-y-6'>
            <div className='space-y-2 text-center'>
                <h1 className='text-3xl font-bold'>Login</h1>
                <p className='text-gray-500 dark:text-gray-400'>Enter your email and password to login.</p>
            </div>
            <div>
                <div className='mt-4 space-y-2'>
                    <Label htmlFor='email'>Email</Label>
                    <Input id='email' required type='email' />
                </div>
                <div className='mt-4 space-y-2'>
                    <Label htmlFor='password'>Password</Label>
                    <Input id='password' required type='password' />
                </div>
                <div className='flex flex-col gap-2'>
                    <Button className='mt-6 w-full' type='submit'>
                        Login
                    </Button>
                    <Link
                        href='/register'
                        className='w-full text-center text-sm font-medium text-muted-foreground hover:text-primary hover:underline'>
                        Register?
                    </Link>
                </div>
            </div>
        </div>
    );
}
