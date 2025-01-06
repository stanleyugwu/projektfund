import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { IUser } from '@/types/user'

export const ProfileImage = ({ user }: { user: IUser }) => {
    const ASSET_BASE = process.env.NEXT_PUBLIC_CDN_IMAGE_BASE_URL;
    return (
        <Avatar className='bg-gray-50'>
            <AvatarImage src={`${ASSET_BASE}${user?.avatar}`} />
            <AvatarFallback className='font-semibold text-primary'>{user?.firstname?.charAt(0)}{user?.lastname?.charAt(0)}</AvatarFallback>
        </Avatar>
    )
}
