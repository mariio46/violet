import { cn } from '@/lib/utils';
import { Children } from '@/types';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

interface ProfileType extends Children {
    className?: string;
}

export function Profile({ className, children }: ProfileType) {
    return <div className={cn('flex items-center font-normal', className)}>{children}</div>;
}

export function ProfileHeader({ className, children }: ProfileType) {
    return <div className={cn('mr-3 shrink-0', className)}>{children}</div>;
}

export function ProfileAvatar({ className, children }: ProfileType) {
    return <Avatar className={cn(className)}>{children}</Avatar>;
}

export function ProfileImage({ className, src }: { className?: string; src?: string }) {
    return <AvatarImage className={cn(className)} src={src} />;
}

export function ProfileFallback({ className }: ProfileType) {
    return <AvatarFallback className={cn(className)} />;
}

export function ProfileContent({ className, children }: ProfileType) {
    return <div className={cn(className)}>{children}</div>;
}

export function ProfileName({ className, children }: ProfileType) {
    return <h4 className={cn('block font-medium', className)}>{children}</h4>;
}

export function ProfileAdditional({ className, children }: ProfileType) {
    return <p className={cn('text-xs text-muted-foreground', className)}>{children}</p>;
}
