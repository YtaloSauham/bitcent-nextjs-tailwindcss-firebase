export default class Money {
    private static _language = "pt-BR"
    private static _coin = "BRL"

    //Melhoria, pegar do Browser

    static formater(num: number): string {
        return (num ?? 0).toLocaleString(Money._language, {
            style: "currency", currency: Money._coin
        })
    }
}