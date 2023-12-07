import { getUser, getUserListedUnits, getUserPortfolio, getUserTransactions } from '@/api/user/list'
import { Card, CardDescription, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Metadata } from 'next'
import React from 'react'
import moment from 'moment'
import { TableCaption, TableHeader, TableRow, TableHead, TableBody, TableCell, Table } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { ITransaction } from '@/types/transaction'
import { IUnit } from '@/types/units'
import { Naira } from '@/components/naira'
import { UserPurchasedUnitsTable } from '../(partials)/UserPurchasedUnitsTable'
import { ListedUnitTable } from '../../properties/(partials)/ListedUnitTable'

export const metadata: Metadata = {
    title: "User"
}

export default async function ({params} : any) {
    const user = await getUser(params.id)
    const transactions : ITransaction[] = await getUserTransactions(user.id)
    const units : IUnit[] = await getUserPortfolio(user.id)
    const listedUnits : any[] = await getUserListedUnits(user.id)

    metadata.title = `${user.firstname} ${user.lastname}`

    return (
        <>
            <Card className='p-5 space-y-5'>
                <CardTitle>
                    {user.firstname} {user.lastname}    
                </CardTitle>

                <CardDescription className='space-y-5'>
                    <div>
                    </div>
                    <div className='grid grid-cols-4 leading-tight text-md'>
                        <div>
                            <h5 className='font-bold'>Email Address</h5>
                            <p>{user.email}</p>
                        </div>
                        
                        <div>
                            <h5 className='font-bold'>Phone Number</h5>
                            <p>{user.phone ?? 'N/A'}</p>
                        </div>

                        <div>
                            <h5 className='font-bold'>Date Joined</h5>
                            <p>{moment(user.createdAt).toLocaleString()}</p>
                        </div>
                    </div>

                    <Tabs defaultValue='portfolio' className='space-y-5'>
                        <TabsList>
                            <TabsTrigger value='portfolio'>Portfolio</TabsTrigger>
                            <TabsTrigger value='listings'>Listed Units</TabsTrigger>
                            <TabsTrigger value='transactions'>Transactions</TabsTrigger>
                        </TabsList>

                        <div className='p-5 border rounded-md'>
                            <TabsContent value="portfolio">
                                <UserPurchasedUnitsTable units={units} />
                            </TabsContent>
                            <TabsContent value="listings">
                                <ListedUnitTable units={listedUnits} showProperty />
                            </TabsContent>
                            <TabsContent value="transactions">
                                <Table>
                                    <TableCaption>All Transactions</TableCaption>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead className="w-[400px]">Reference</TableHead>
                                            <TableHead>Purpose</TableHead>
                                            <TableHead>Amount</TableHead>
                                            <TableHead>Payment Method</TableHead>
                                            <TableHead>Status</TableHead>
                                            <TableHead>Created At</TableHead>
                                            <TableHead></TableHead>
                                        </TableRow>
                                    </TableHeader>

                                    <TableBody>
                                        {
                                            transactions.map((transaction) => (
                                                <TableRow key={transaction.id}>
                                                    <TableCell className="w-[400px]">{transaction.reference}</TableCell>
                                                    <TableCell>{transaction.purpose}</TableCell>
                                                    <TableCell><Naira />{transaction.amount.toLocaleString()}</TableCell>
                                                    <TableCell>{transaction.payment_method}</TableCell>
                                                    <TableCell>{transaction.status}</TableCell>
                                                    <TableCell>
                                                        {moment(transaction.createdAt).format('Do MMM YYYY')}
                                                    </TableCell>
                                                    <TableCell>
                                                    <DropdownMenu>
                                                        <DropdownMenuTrigger>Open</DropdownMenuTrigger>
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
                                    </TableBody>
                                </Table>
                            </TabsContent>
                        </div>
                    </Tabs>
                </CardDescription>    
            </Card>  
        </>
    )
}
