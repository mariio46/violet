import React from 'react';
import { Card, CardContent } from './ui/card';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';
import { AuthenticatedUserType } from '@/types';
import { gravatar } from '@/types/avatar';

export default function UserCard({ user }: { user: AuthenticatedUserType }) {
    return (
        <Card className='mx-auto w-full max-w-md'>
            <CardContent className='mt-8 flex flex-col items-center space-y-4'>
                <Avatar className='h-32 w-32'>
                    <AvatarImage alt='@username' src={gravatar(user.email)} />
                    <AvatarFallback>M</AvatarFallback>
                </Avatar>
                <h2 className='text-2xl font-semibold'>{user?.name}</h2>
                <span className='text-sm text-gray-500'>{user?.email}</span>
                <p className='text-center text-gray-600 dark:text-gray-300'>
                    This is a user bio. It contains a short description about the user.
                </p>
                <Button>Edit Profile</Button>
            </CardContent>
        </Card>
    );
}
