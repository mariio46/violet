import RegisterForm from './_form';

export default function Register() {
    return (
        <div className='mx-auto w-full max-w-md space-y-6'>
            <div className='space-y-2 text-center'>
                <h1 className='text-3xl font-bold'>Register</h1>
                <p className='text-gray-500 dark:text-gray-400'>Enter your credentials to register.</p>
            </div>
            <RegisterForm />
        </div>
    );
}
