import Transaction from "@/logic/core/finances/Transaction"
import { useEffect, useState } from "react"
import transactionFalse from "../constants/transactionFalse"
import Id from "@/logic/core/shared/Id"

export default function useTransactions() {

    const [transactions, setTransactions] = useState<Transaction[]>(transactionFalse)
    const [transaction, setTransaction] = useState<Transaction | null>(null)

    useEffect(getTransactions, [])

    function getTransactions() {
        setTransactions(transactionFalse)
    }

    function save(transaction: Transaction) {
        const other = transactions.filter(t => t.id != transaction.id)
        setTransactions([
            ...other,
            { ...transaction, id: transaction.id ?? Id.novo() }

        ])
        setTransaction(null)
    }


    function remove(transaction: Transaction) {
        const other = transactions.filter(t => t.id != transaction.id)
        setTransactions(other)
        setTransaction(null)
    }


    function cancel() {
        setTransaction(null)
    }

    function select(transaction: Transaction) {
        setTransaction(transaction)

    }


    return {
        transactions,
        transaction,
        save,
        remove,
        cancel,
        select
    }

}