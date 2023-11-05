import { Naira } from "@/components/naira"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { TableCaption, TableHeader, TableRow, TableHead, TableBody, TableCell, Table } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Link } from "lucide-react"
import { listUsers } from "@/api/user/list"

export default async () => {
    const users = await listUsers()
    return (
        <>
            <Card>
                <CardHeader className="px-10">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-lg font-semibold">Users</h1>
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
                        <TableCaption>All Users.</TableCaption>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[400px]">Name</TableHead>
                                <TableHead>Email</TableHead>
                                <TableHead>Purchased Units</TableHead>
                                <TableHead>Sold Units</TableHead>
                                {/* <TableHead>Amount</TableHead> */}
                                <TableHead></TableHead>
                            </TableRow>
                        </TableHeader>

                        <TableBody>
                            {
                                users.map((user) => (
                                    <TableRow key={user.id}>
                                        <TableCell className="w-[400px]">{user.firstname} {user.lastname}</TableCell>
                                        <TableCell>{user.email}</TableCell>
                                        <TableCell><Naira />{user.units?.length.toLocaleString()}</TableCell>
                                        <TableCell >$250.00</TableCell>
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