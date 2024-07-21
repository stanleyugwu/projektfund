'use client'

import { Naira } from "@/components/naira";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useApp } from "@/context/AppContext";
import { useAuth } from "@/context/AuthProvider";
import { cn } from "@/lib/utils";
import { LandmarkIcon } from "lucide-react";

export function AvailableBalance () {
    
    const {user} = useAuth()

    useApp({
        title: 'Wallet'
    })

    return (
        <Card className={cn(['shadow-none'])}>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                <CardTitle className="text-sm font-medium">Available Balance</CardTitle>
                <LandmarkIcon className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold"><Naira />{user?.wallet.main_bal.toLocaleString()}</div>
            </CardContent>
        </Card>
    )
}