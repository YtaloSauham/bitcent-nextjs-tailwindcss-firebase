import { TypeTransaction } from "./TypeTransaction"

export default interface Transaction {
    id?: string
    description: string
    value: number
    date: Date
    type: TypeTransaction
}


export const emptyTransaction: Transaction = {
    description: '',
    date: new Date(),
    value: 0,
    type: TypeTransaction.DESPESA,

}