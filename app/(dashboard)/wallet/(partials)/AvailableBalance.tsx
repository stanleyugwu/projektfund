'use client'

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useAuth } from "@/context/AuthProvider";
import { cn } from "@/lib/utils";
import { LandmarkIcon } from "lucide-react";

export function AvailableBalance () {
    
    const {user} = useAuth()

    return (
        <Card className={cn(['shadow-none'])}>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                <CardTitle className="text-sm font-medium">Available Balance</CardTitle>
                <LandmarkIcon className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">{user?.wallet.avail_bal}</div>
                <p className="text-xs text-muted-foreground">
                +180.1% from last month
                </p>
            </CardContent>
        </Card>
    )
}