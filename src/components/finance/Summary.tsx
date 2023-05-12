
import { IconArrowsDoubleSwNe, IconCash, IconCreditCard } from '@tabler/icons-react'
import SummaryItem from './SummaryItem'
import Transaction from '@/logic/core/finances/Transaction'
import { TypeTransaction } from '@/logic/core/finances/TypeTransaction'

interface SummaryProps {
    transaction: Transaction[]
    className?: string
}

export default function Summary(props: SummaryProps) {
    const totalizar = (total: number, r: Transaction) => total + r.value

    const receitas = props.transaction
        .filter((r) => r.type === TypeTransaction.RECEITA)
        .reduce(totalizar, 0)

    const despesas = props.transaction
        .filter((r) => r.type === TypeTransaction.DESPESA)
        .reduce(totalizar, 0)

    const total = receitas - despesas

    return (
        <div className={`
            grid grid-cols-1 md:grid-cols-3 gap-4
        `}>
            <SummaryItem
                title='Receitas'
                value={receitas}
                icon={<IconCash />}
                iconClassName="text-green-500"
            />
            <SummaryItem
                title='Despesas'
                value={despesas}
                icon={<IconCreditCard />}
                iconClassName="text-red-500"
            />
            <SummaryItem
                title='Total'
                value={total}
                icon={<IconArrowsDoubleSwNe />}
                iconClassName="text-yellow-500"
                valueClassName={total > 0 ? 'text-green-500' : total < 0 ? 'text-red-500' : ''}
            />
        </div>
    )
}