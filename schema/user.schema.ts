import { ISchema } from "@/types/validator";

export const __UpdateProfileSchema : ISchema = {
    rules: {
        email: 'required|email',
        firstname: 'required|string',
        lastname: 'required|string',
        // avatar: 'image'
    },

    attributes: {
        email: 'Email Address',
        lastname: "Last Name",
        firstname: "First Name",
        avatar: "Avatar"
    }
}

export const __UpdatePasswordSchema : ISchema = {
    rules: {
        old_password: 'required|string|min:8',
        new_password: 'required|string|confirmed|min:8',
        new_password_confirmation: 'required|string|min:8'
    },

    attributes: {
        old_password: 'Old Password',
        new_password: "New Password",
        new_password_confirmation: "New Password Confirmation"
    }
}

export const __UpdateUserBankSchema : ISchema = {
    rules: {
        account_name: 'required|string',
        // bank_name: 'required|string',
        bank_code: 'required|string|min:2',
        account_number: 'required|numeric'
    },
    
    attributes: {
        account_name: 'Account Name',
        // bank_name: 'Bank Name',
        bank_code: 'Bank Code',
        account_number: 'Account Number'
    }
}