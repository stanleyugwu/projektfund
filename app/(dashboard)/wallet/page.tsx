import { Card, CardContent } from "@/components/ui/card";
import { AvailableBalance } from "./(partials)/AvailableBalance";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { DepositDialog } from "./(partials)/DepositDialog";
import { WithdrawDialog } from "./(partials)/WithdrawDialog";
import { Naira } from "@/components/naira";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import moment from "moment";
import { userTransactions } from "@/server/transactions/list";
import { transactionSymbolColor, transactionType } from "@/services/transactions";

export default async function Wallet(){
    const transactions: any[] = await userTransactions()
    
    return (
        <>
            <Card>
                <CardContent className="p-10 space-y-5">
                    <div className="flex space-x-5">
                        <div className="md:w-3/12">
                            <AvailableBalance />
                        </div>
                    </div>

                    <div className="space-x-4">
                        <DepositDialog />
                        <WithdrawDialog />
                    </div>
                    <div className="p-5 border rounded-lg">
                        <div className="mb-2">
                            <h3 className="text-lg font-semibold">Transactions</h3>
                        </div>
                        <Table>
                            <TableCaption>All Transactions</TableCaption>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="">Reference</TableHead>
                                    <TableHead>Purpose</TableHead>
                                    <TableHead>Amount</TableHead>
                                    <TableHead>Payment Method</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead>Created At</TableHead>
                                </TableRow>
                            </TableHeader>

                            <TableBody>
                                {
                                    transactions.map((transaction) => (
                                        <TableRow key={transaction.id}>
                                            <TableCell className="">{transaction.reference}</TableCell>
                                            <TableCell className="">{transaction.purpose}</TableCell>
                                            <TableCell className={transactionSymbolColor(transaction)?.color}>{transactionSymbolColor(transaction)?.symbol} <Naira />{transaction.amount.toLocaleString()}</TableCell>
                                            <TableCell>{(transaction.payment_method as string).toUpperCase()}</TableCell>
                                            <TableCell>{transaction.status}</TableCell>
                                            <TableCell>
                                                {moment(transaction.createdAt).format('Do MMM Y hh:mm')}
                                            </TableCell>
                                        </TableRow>
                                    ))
                                }
                            </TableBody>
                        </Table>
                    </div>
                </CardContent>
            </Card>
        </>
    )
}