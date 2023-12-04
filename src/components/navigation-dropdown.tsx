import Link from 'next/link';
import {
    Profile,
    ProfileAdditional,
    ProfileAvatar,
    ProfileContent,
    ProfileFallback,
    ProfileHeader,
    ProfileImage,
    ProfileName,
} from './navigation-profile';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { Icon } from './icon';
import { gravatar } from '@/types/avatar';
import NavigationDropdownTheme from './navigation-dropdown-theme';
import { AuthenticatedUserType } from '@/types';
import { Logout } from './auth';

export default function NavigationDropdown({ user }: { user: AuthenticatedUserType }) {
    // console.log(user);
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className='relative select-none outline-none'>
                <Avatar className='h-[2.7rem] w-[2.7rem]'>
                    <AvatarImage src={gravatar(user.email)} />
                    <AvatarFallback>{'M'}</AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end' className='mt-2 w-[260px] space-y-1'>
                <DropdownMenuLabel>
                    <Profile>
                        <ProfileHeader>
                            <ProfileAvatar>
                                <ProfileImage src={gravatar(user.email)} />
                                <ProfileFallback>{'M'}</ProfileFallback>
                            </ProfileAvatar>
                        </ProfileHeader>
                        <ProfileContent>
                            <ProfileName>{user.name}</ProfileName>
                            <ProfileAdditional>{user.email}</ProfileAdditional>
                        </ProfileContent>
                    </Profile>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem asChild>
                        <Link href='/dashboard'>
                            <Icon name='IconDashboard' className='mr-2' />
                            Dashboard
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                        <Link href='#'>
                            <Icon name='IconSettings' className='mr-2' />
                            Settings
                        </Link>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <NavigationDropdownTheme />
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <Logout />
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
