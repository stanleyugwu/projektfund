import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { EnvelopeClosedIcon } from "@radix-ui/react-icons";

export function EmailVerificationError ({message}: {message: string}) {
    return (
        <>
            <Alert>
                <EnvelopeClosedIcon className="h-4 w-4" />
                <AlertTitle>Email Verification Required!</AlertTitle>
                <AlertDescription>
                    <p className="text-md">{message}</p>
                    <Button size={'sm'} variant={'link'} className="p-0">Resend Code</Button>
                </AlertDescription>
            </Alert>
        </>
    )
}