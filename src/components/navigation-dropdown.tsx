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

export default function NavigationDropdown() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className='relative select-none outline-none'>
                <Avatar className='h-[2.7rem] w-[2.7rem]'>
                    <AvatarImage src={gravatar('mariomad2296@gmail.com')} />
                    <AvatarFallback>{'M'}</AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end' className='mt-2 w-[260px] space-y-1'>
                <DropdownMenuLabel>
                    <Profile>
                        <ProfileHeader>
                            <ProfileAvatar>
                                <ProfileImage src={gravatar('mariomad2296@gmail.com')} />
                                <ProfileFallback>{'M'}</ProfileFallback>
                            </ProfileAvatar>
                        </ProfileHeader>
                        <ProfileContent>
                            <ProfileName>{'Mario'}</ProfileName>
                            <ProfileAdditional>{'mariomad2296@gmail.com'}</ProfileAdditional>
                        </ProfileContent>
                    </Profile>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem asChild>
                        <Link href='#'>
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
                    <DropdownMenuItem>
                        <Icon name='IconLogout2' className='mr-2' />
                        Logout
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
