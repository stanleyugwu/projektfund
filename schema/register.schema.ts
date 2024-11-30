import { ISchema } from "@/types/validator";

export const __RegisterSchema : ISchema = {
    rules: {
        firstname: 'required|string',
        lastname: 'required|string',
        email: 'required|email',
        password: 'required|min:8'
    },
    
    attributes: {
        firstname: 'First name',
        lastname: 'Last name',
        email: 'Email Address',
        password: "Password"
    }
}