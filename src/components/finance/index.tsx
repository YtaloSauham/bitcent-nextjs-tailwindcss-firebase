import { useState } from "react";
import Content from "../template/Content";
import Header from "../template/Header";
import Page from "../template/Page";
import Transaction, { emptyTransaction } from "@/logic/core/finances/Transaction";
import transactionFalse from "@/data/constants/transactionFalse";
import List from "./List";
import Summary from "./Summary";
import Forms from "./Forms";
import Id from "@/logic/core/shared/Id";
import { IconPlus } from "@tabler/icons-react";
import useTransactions from "@/data/hooks/useTransactions";
import EmptyTable from "../template/EmptyTable";

export default function Finance() {

    const { transaction, remove, transactions, save, cancel, select } = useTransactions()

    return (
        <Page>
            <Header />
            <Content>
                <Summary transaction={transactions} />
                <div className="py-3">
                    <button className="btn bg-blue-500 flex items-center py-4 px-3 rounded-md" onClick={() => setTransaction(emptyTransaction)}>

                        <IconPlus />
                        <span>Nova Transação</span>
                    </button>
                </div>

                {transaction ? (
                    <Forms transaction={transaction}
                        cancel={cancel}
                        save={save}
                        remove={remove} />
                ) : transactions.length ? (
                    <List transaction={transactions}
                        selectedTransaction={select} />

                ) : (<EmptyTable>
                    Nenhuma transação encontrada.
                </EmptyTable>)}

            </Content>

        </Page>
    )
}