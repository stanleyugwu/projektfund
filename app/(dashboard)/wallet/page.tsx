import { Card, CardContent } from "@/components/ui/card";
import { AvailableBalance } from "./(partials)/AvailableBalance";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { DepositDialog } from "./(partials)/DepositDialog";
import { WithdrawDialog } from "./(partials)/WithdrawDialog";
import { Naira } from "@/components/naira";
import moment from "moment";
import { userTransactions } from "@/server/transactions/list";
import { transactionSymbolColor, transactionType } from "@/services/transactions";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: 'Wallet',
	description: '',
}

export default async function Wallet(){
    const transactions: any[] = await userTransactions()
    
    return (
        <>
            <Card>
                <CardContent className="md:p-10 p-5 space-y-5">
                    <div className="flex space-x-5">
                        <div className="md:w-3/12 w-full">
                            <AvailableBalance />
                        </div>
                    </div>

                    <div className="gap-x-4 grid grid-cols-2 md:grid-cols-6">
                        <DepositDialog />
                        <WithdrawDialog />
                    </div>
                    <div className="p-5 border rounded-lg z-0 bg-white">
                        <div className="mb-2">
                            <h3 className="text-lg font-semibold">Transactions</h3>
                        </div>
                        <Table>
                            <TableCaption>All Transactions</TableCaption>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="">Reference</TableHead>
                                    <TableHead className="min-w-fit">Purpose</TableHead>
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
                                            <TableCell className="min-w-fit">{transaction.purpose}</TableCell>
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