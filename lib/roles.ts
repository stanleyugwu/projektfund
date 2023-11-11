import { IRoles } from "@/types/user"

const roles : Record<'user' | 'superadmin' | 'admin', IRoles> = {
    user: 'user',
    superadmin: 'super admin',
    admin: 'admin'
}

export default roles