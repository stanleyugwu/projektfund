import { Naira } from '@/components/naira'
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { TableCell, TableRow } from '@/components/ui/table'
import { IUnit } from '@/types/units'
import { IUser } from '@/types/user'
import { MoreVerticalIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

interface IUsersRowProps {
    users: IUser[]
}

export const UsersRow = ({users} : IUsersRowProps) => {
    return (
        <>
            {
                users.map((user: any) => (
                    <TableRow key={user.id}>
                        <TableCell className="w-[400px]">
                            <Link href={`/admin/users/${user.id}`} className='font-semibold' >{user.firstname} {user.lastname}</Link>
                        </TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.units?.length.toLocaleString()}</TableCell>
                        <TableCell ><Naira /> {(user.units as IUnit[]).reduce((carry, unit) => unit.property.unit_price + carry, 0)}</TableCell>
                        <TableCell>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild >
                                <Button variant={'ghost'} size={'icon'} >
                                    <MoreVerticalIcon className="h-5" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuItem>Edit</DropdownMenuItem>
                                <DropdownMenuItem>Deactivate</DropdownMenuItem>
                                <DropdownMenuItem>Delete</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                        </TableCell>
                    </TableRow>
                ))
            }
        </>
    )
}
