import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { IUser } from '@/types/user'

export const ProfileImage = ({user} : {user: IUser}) => {
    return (
        <Avatar className='bg-gray-50'>
            <AvatarImage src={user?.avatar} />
            <AvatarFallback className='font-semibold text-primary'>{user?.firstname?.charAt(0)}{user?.lastname?.charAt(0)}</AvatarFallback>
        </Avatar>
    )
}
