import Transaction from "@/logic/core/finances/Transaction";

interface ListProps {
    transaction: Transaction[]
}



export default function List(props: ListProps) {

    function renderLine(transaction: Transaction) {
        return (
            <div key={transaction.id} className={`
            flex gap-3 `}>
                <span className="w-1/2">{transaction.description}</span>
                <span className="flex-1">{transaction.date.toString()}</span>
                <span>{transaction.value}</span>

            </div>
        )
    }

    return (
        <div className={`
        flex flex-col border border-zinc-700
        rounded-xl`}>
            {props.transaction.map(renderLine)}
        </div>



    )
}