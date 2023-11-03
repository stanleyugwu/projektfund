import Unit from "@/models/Unit";
import { authUser } from "@/services/auth";

export async function userPortfolio () {
    const user = await authUser();
    return await Unit.find({user: user._id}).populate('user property unit')
}