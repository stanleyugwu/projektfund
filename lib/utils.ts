import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const env = (key: string): any => process.env[key]

export function getFormDataAsJson(formData: FormData){
  return JSON.parse(JSON.stringify(Object.fromEntries(formData.entries())))
}