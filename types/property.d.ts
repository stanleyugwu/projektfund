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
    available_units: number
    image: string
    gallery: Array<String>,
    video: string
    units: number
    state: string
    unit_price: number
    description: string
    status: boolean
}

// type IPropertyTypes = 'Studio' | 'Self Contain' | 'Duplex'