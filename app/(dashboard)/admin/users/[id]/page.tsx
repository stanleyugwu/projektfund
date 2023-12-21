import { getUser, getUserListedUnits, getUserPortfolio, getUserTransactions } from '@/api/user/list'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
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
import { UserProfile } from '../(partials)/UserProfile'
import { LandmarkIcon } from 'lucide-react'
import { BankSettings } from '../(partials)/BankSettings'
import { getBanks } from '@/services/payment'
import { PasswordSettings } from '../(partials)/PasswordSettings'
import { Title } from '@/components/title'

export const metadata: Metadata = {
    title: "User"
}

export default async function ({params} : any) {
    const user = await getUser(params.id)
    const transactions : ITransaction[] = await getUserTransactions(user.id)
    const units : IUnit[] = await getUserPortfolio(user.id)
    const listedUnits : any[] = await getUserListedUnits(user.id)

    metadata.title = `${user.firstname} ${user.lastname}`

    const banks = await getBanks()

    return (
        <>
            <Title title={`${user.firstname} ${user.lastname}`} />
            <Card className='p-5 space-y-5'>
                <CardDescription className='space-y-5'>
                    <div className='grid gap-4 leading-tight md:grid-cols-4 text-md'>
                        <div>
                            <h5 className='font-bold'>Name</h5>
                            <p>{user.firstname} {user.lastname} </p>
                        </div>

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
                            <p>{moment(user.createdAt).format("Do MMM Y")}</p>
                        </div>
                    </div>

                    <div className="flex space-x-5">
                        <div className="w-full md:w-3/12">
                            <Card >
                                <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                                    <CardTitle className="text-sm font-medium">Available Balance</CardTitle>
                                    <LandmarkIcon className="w-4 h-4 text-muted-foreground" />
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold"><Naira />{user?.wallet.main_bal.toLocaleString()}</div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    <Tabs defaultValue='portfolio' className='space-y-5'>
                        <TabsList className='w-full px-5 overflow-x-auto'>
                            <TabsTrigger value='portfolio'>Portfolio</TabsTrigger>
                            <TabsTrigger value='listings'>Listed Units</TabsTrigger>
                            <TabsTrigger value='transactions'>Transactions</TabsTrigger>
                            <TabsTrigger value='profile'>Profile</TabsTrigger>
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
                            <TabsContent value="profile">
                                <UserProfile user={user} />
                                <PasswordSettings user={user} />
                                <BankSettings banks={banks} user={user} />
                            </TabsContent>
                        </div>
                    </Tabs>
                </CardDescription>    
            </Card>  
        </>
    )
}
