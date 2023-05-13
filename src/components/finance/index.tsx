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

    const [transaction, setTransaction] = useState<Transaction[]>(transactionFalse)

    return (
        <Page>
            <Header />
            <Content>
                <Summary transaction={transaction} />
                <List transaction={transaction} />
                <Forms transaction={transaction[0]} />
            </Content>

        </Page>
    )
}