import LoginForm from './_form';

export default function Login() {
    return (
        <div className='mx-auto w-full max-w-md space-y-6'>
            <div className='space-y-2 text-center'>
                <h1 className='text-3xl font-bold'>Login</h1>
                <p className='text-gray-500 dark:text-gray-400'>Enter your email and password to login.</p>
            </div>
            <div>
                <LoginForm />
            </div>
        </div>
    );
}
