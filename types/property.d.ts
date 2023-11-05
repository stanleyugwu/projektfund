import { IStatus } from "./status"

interface IProperty{
    id: Key | null | undefined
    _id: string
    name: string
    price: number
    address: string
    city: string
    country: string
    type: string
    image: string
    gallery: Array<String>,
    video: string
    units: number
    unit_price: number
    description: string
    status: IStatus
}

// type IPropertyTypes = 'Studio' | 'Self Contain' | 'Duplex'