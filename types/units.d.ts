import { IProperty } from "./property";
import { IUser } from "./user";

export interface IUnit {
    _id: string
    property: IProperty
    units: number
    unit_cost: number
    available_units: number
    listed_units: number
    status: boolean
    user: IUser
}