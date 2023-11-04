import { IProperty } from "./property";
import { IUser } from "./user";

export interface IUnit {
    _id: string
    property: IProperty
    units: number
    user: IUser
}