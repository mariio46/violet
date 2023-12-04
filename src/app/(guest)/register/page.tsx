import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';

export default function Register() {
    return (
        <div className='mx-auto w-full max-w-md space-y-6'>
            <div className='space-y-2 text-center'>
                <h1 className='text-3xl font-bold'>Register</h1>
                <p className='text-gray-500 dark:text-gray-400'>Enter your credentials to register.</p>
            </div>
            <div>
                <div className='mt-4 space-y-2'>
                    <Label htmlFor='name'>Name</Label>
                    <Input id='name' required type='text' />
                </div>
                <div className='mt-4 space-y-2'>
                    <Label htmlFor='email'>Email</Label>
                    <Input id='email' required type='email' />
                </div>
                <div className='mt-4 space-y-2'>
                    <Label htmlFor='password'>Password</Label>
                    <Input id='password' required type='password' />
                </div>
                <div className='mt-4 space-y-2'>
                    <Label htmlFor='password_confirmation'>Confirm Password</Label>
                    <Input id='password_confirmation' required type='password' />
                </div>
                <div className='flex flex-col gap-2'>
                    <Button className='mt-6 w-full' type='submit'>
                        Register
                    </Button>
                    <Link
                        href='/login'
                        className='w-full text-center text-sm font-medium text-muted-foreground hover:text-primary hover:underline'>
                        Login?
                    </Link>
                </div>
            </div>
        </div>
    );
}
