import { TypeTransaction } from "./TypeTransaction"

export default interface Transaction {
    id?: string
    description: string
    value: number
    date: Date
    type: TypeTransaction
}