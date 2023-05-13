
import Transaction from "@/logic/core/finances/Transaction"
import { TypeTransaction } from "@/logic/core/finances/TypeTransaction"
import DateFormater from "@/logic/utils/DateFormater"

import { IconCheck, IconTrash, IconX } from "@tabler/icons-react"
import { useState } from "react"

interface FormsProps {
    transaction: Transaction
    save?: (Transaction: Transaction) => void
    remove?: (Transaction: Transaction) => void
    cancel?: () => void
}

export default function Forms(props: FormsProps) {
    const [transaction, setTransaction] = useState<Transaction>(props.transaction)
    console.log(transaction)
    return (
        <div className={`
            flex flex-col border border-zinc-700
            rounded-xl overflow-hidden
        `}>
            <div className="bg-black py-3 px-7 text-zinc-400">Formulário</div>
            <div className="flex flex-col gap-4 p-4  text-black sm:p-7">
                <input
                    type="text"
                    placeholder="Description"
                    className="input"
                    value={transaction.description ?? ''}
                    onChange={e => {
                        setTransaction({
                            ...transaction,
                            description: e.target.value
                        })
                    }}
                />
                <input
                    type="number"
                    placeholder="Value"
                    className="input"
                    value={transaction.value ?? 0}
                    onChange={e => {
                        setTransaction({
                            ...transaction,
                            value: +e.target.value
                        })
                    }}
                />
                <input
                    type="date"
                    placeholder="Date"
                    className="input"
                    value={DateFormater.yymmdd.formate(transaction.date ?? new Date())}
                    onChange={e => {
                        setTransaction({
                            ...transaction,
                            date: new Date(`${e.target.value} `)
                        })
                    }}
                />
                <div className="flex gap-8">
                    <div className="flex gap-2">
                        <input
                            type="radio"
                            name="Type"
                            value="receita"
                            checked={transaction.type === 'receita'}
                            onChange={() => {
                                setTransaction({
                                    ...transaction,
                                    type: TypeTransaction.RECEITA
                                })
                            }}
                        />
                        <span>Receita</span>
                    </div>
                    <div className="flex gap-2">
                        <input
                            type="radio"
                            name="type"
                            value="despesa"
                            checked={transaction.type === 'despesa'}
                            onChange={() => {
                                setTransaction({
                                    ...transaction,
                                    type: TypeTransaction.DESPESA
                                })
                            }}
                        />
                        <span>Despesa</span>
                    </div>
                </div>
            </div>
            <div className="flex px-4 sm:px-7 py-4 gap-3 bg-zinc-800">
                <button className="btn flex py-4 px-4 
                items-center bg-green-500
                rounded-md " onClick={() => props.save?.(transaction)}>
                    <IconCheck />
                    <span className="hidden sm:inline">Salvar</span>
                </button>
                <button className="btn  flex  py-4 px-4  rounded-md items-center bg-zinc-500" onClick={() => props.cancel?.()}>
                    <IconX />
                    <span className="hidden sm:inline">Cancelar</span>
                </button>
                <span className="flex-1"></span>
                {props.transaction.id && (
                    <button className="btn py-4 px-4 rounded-md flex items-center bg-red-500" onClick={() => props.remove?.(transaction)}>
                        <IconTrash />
                        <span className="hidden sm:inline">Excluir</span>
                    </button>
                )}
            </div>
        </div>
    )
}