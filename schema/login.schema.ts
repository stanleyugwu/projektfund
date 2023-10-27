import { ISchema } from "@/types/validator";

export const __LoginSchema : ISchema = {
    rules: {
        email: 'required|email',
        password: 'required'
    },

    attributes: {
        email: 'Email Address',
        password: "Password"
    }
}