import { useState } from "react";
import Content from "../template/Content";
import Header from "../template/Header";
import Page from "../template/Page";
import Transaction from "@/logic/core/finances/Transaction";
import transactionFalse from "@/data/constants/transactionFalse";
import List from "./List";
import Summary from "./Summary";
import Forms from "./Forms";

export default function Finance() {

    const [transactions, setTransactions] = useState<Transaction[]>(transactionFalse)
    const [transaction, setTransaction] = useState<Transaction | null>(null)

    return (
        <Page>
            <Header />
            <Content>
                <Summary transaction={transactions} />

                {transaction ? (
                    <Forms transaction={transaction}
                        cancel={() => setTransaction(null)} />
                ) : (
                    <List transaction={transactions}
                        selectedTransaction={setTransaction} />

                )}

            </Content>

        </Page>
    )
}