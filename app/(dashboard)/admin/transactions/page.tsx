import { Naira } from "@/components/naira"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { TableCaption, TableHeader, TableRow, TableHead, TableBody, TableCell, Table } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { listTransactions } from "@/server/transactions/list"
import moment from "moment"

export default async () => {
    const transactions = await listTransactions()

    return (
        <>
            <Card>
                <CardHeader className="px-10">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-xl font-semibold">Transactions</h1>
                        </div>
                        <div>
                            <Button asChild>
                                {/* <Link href="/admin/properties/create">Add Property</Link> */}
                            </Button>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="px-10">
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
                </CardContent>
            </Card>
        </>
    )
}