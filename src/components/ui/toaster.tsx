'use client';

import { Toast, ToastClose, ToastDescription, ToastProvider, ToastTitle, ToastViewport } from '@/components/ui/toast';
import { useToast } from '@/components/ui/use-toast';
import { Icon } from '../icon';
import { cn } from '@/lib/utils';

export function Toaster() {
    const { toasts } = useToast();

    return (
        <ToastProvider>
            {toasts.map(function ({
                id,
                title,
                description,
                icon = 'IconCircleCheck',
                className = 'text-green-500',
                action,
                ...props
            }) {
                return (
                    <Toast key={id} {...props}>
                        <div className='flex gap-x-3'>
                            {icon && <Icon name={icon} className={cn('stroke-2', className)} />}
                            <div className='flex flex-col'>
                                <ToastTitle>{title}</ToastTitle>
                                <ToastDescription>{description}</ToastDescription>
                            </div>
                        </div>
                        {/* <div className='grid gap-1'>
                            {title && <ToastTitle>{title}</ToastTitle>}
                            {description && <ToastDescription>{description}</ToastDescription>}
                        </div> */}
                        {action}
                        <ToastClose />
                    </Toast>
                );
            })}
            <ToastViewport />
        </ToastProvider>
    );
}
