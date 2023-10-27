import { ExclamationTriangleIcon } from "@radix-ui/react-icons"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"

export function AlertError({title, message} : {title?: string, message: string}) {
  return (
    <Alert variant="destructive">
      <ExclamationTriangleIcon className="w-4 h-4" />
      <AlertTitle>{title ?? 'Error'}</AlertTitle>
      <AlertDescription>
        {message}
      </AlertDescription>
    </Alert>
  )
}
