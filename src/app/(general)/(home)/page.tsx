import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import UserCard from '@/components/user-card';
import { getServerSession } from 'next-auth';

export default async function Home() {
    const session = await getServerSession(authOptions);
    return (
        <div className='h-[1000rem]'>
            {/* <h1 className='text-xl font-bold text-foreground hover:text-primary'>Hello</h1> */}
            {!!session && (
                <div className='mx-auto mt-20 max-w-2xl'>
                    {/* @ts-ignore */}
                    <UserCard user={session?.user} />
                </div>
            )}
        </div>
    );
}
