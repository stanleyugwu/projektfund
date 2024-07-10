import { Naira } from "@/components/naira"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { TableCaption, TableHeader, TableRow, TableHead, TableBody, TableCell, Table } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { listUsers } from "@/server/user/list"
import { FlipVertical2, MoreVerticalIcon } from "lucide-react"
import { DotsVerticalIcon } from "@radix-ui/react-icons"
import { Title } from "@/components/title"
import { UsersRow } from "./(partials)/UsersRow"

export default async () => {
    const users = await listUsers()
    return (
        <>
            <Title title="Users" />
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
                                <TableHead>Units Owned</TableHead>
                                <TableHead>Portfolio</TableHead>
                                {/* <TableHead>Amount</TableHead> */}
                                <TableHead></TableHead>
                            </TableRow>
                        </TableHeader>

                        <TableBody>
                            <UsersRow users={users} />
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </>
    )
}