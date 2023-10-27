import { env } from "./utils";
import nodemailer from 'nodemailer';

export default nodemailer.createTransport({
    host: env('MAIL_HOST'),
    port: env('MAIL_PORT'),
    secure: false,
    auth: {
        user: env('MAIL_USERNAME'),
        pass: env('MAIL_PASSWORD')
    },
    from: env('MAIL_USERNAME')
})
