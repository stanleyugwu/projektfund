import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AvailableBalance } from "./(partials)/AvailableBalance";
import { Table } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";
import { DepositDialog } from "./(partials)/DepositDialog";
import { useDialog } from "@/hooks/useDialog";
import { WithdrawDialog } from "./(partials)/WithdrawDialog";

export default async function Wallet(){

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
                    <Table>
                        
                    </Table>
                </CardContent>
            </Card>
        </>
    )
}