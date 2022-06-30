import {
    loadStdlib,
    ask
} from "@reach-sh/stdlib"
import * as backend from "./build/index.main.mjs"

if (process.argv.length < 3 || ["seller", "buyer"].includes((process.argv[2]) == false)) {
    console.log(`Usage: reach run index [seller|buyer]`)
    process.exit(0)
}
const role = process.argv[2]
console.log(`Your role is ${role}`)

const stdlib = loadStdlib(process.env)
console.log(`The consensus network is ${stdlib.connector}.`)
const suStr = stdlib.standardUnit;
const auStr = stdlib.atomicUnit;
const toAu = (su) => stdlib.parseCurrency(su)
const toSu = (au) => stdlib.formatCurrency(au, 4)
const iBalance = toAu(1000)
const showBalance = async(acc) => console.log(`Your balance is ${toSu(await stdlib.balanceOf(acc))} ${suStr}.`)
const suBal = 1000;
// console.log(`Balance is ${suBal} ${suStr}`)
const auBal = toAu(suBal)
    // console.log(`Balance is ${auBal} ${auStr}`)
    // console.log(`Balance is ${toSu(auBal)} ${suStr}`);
const commonInteract = (role) => ({
    reportCancellation: () => {
        console.log(`${role =="buyer"?"You":"The Buyer "}cancelled the order.`)
    },
    reportPayment: (payment) => {
        console.log(`${role =="buyer" ? "You" : "The Buyer"} paid ${toSu(payment)} ${suStr} to the contract`)
    },
    reportTransfer: (payment) => {
        console.log(`The contract paid ${toSu(payment)} ${suStr} to ${role == 'seller' ? 'you' : 'the seller'}.`)
    },
})

// Seller
if (role === "seller") {
    const sellerInteract = {
        ...commonInteract(role),
        price: toAu(5),
        wisdom: await ask.ask('Enter a wise phrasw, Or press Enter for the default: ', (s) => {
            let w = !s ? "Build healthy communities." : sellerInteract
            if (!s) {
                console.log(w)
            }
            return w;
        }),
        reportReady: async(price) => {
            console.log(`Your wisdom is for sale at ${toSu(price)} ${suStr}.`)
            console.log(`Contract info: ${JSON.stringify(await ctc.getInfo())}`)
        }
    }
    const acc = await stdlib.newTestAccount(iBalance);
    await showBalance(acc);
    const ctc = acc.contract(backend);
    await ctc.participants.Seller(sellerInteract);
    await showBalance(acc);
}
// Buyer
else {
    const buyerInteract = {
        ...commonInteract(role),
        confirmPurchase: async(price) => await ask.ask(`Do you want to purchase wisdom for ${toSu(price)} ${suStr}`, ask.yesno),
        reportWisdom: (wisdom) => console.log(`Your new wisdom is "${wisdom}"`)
    }

    const acc = await stdlib.newTestAccount(iBalance);
    const info = await ask.ask(`Paste contract info`, (s) => JSON.parse(s))
    const ctc = acc.contract(backend, info);
    await showBalance(acc)
    await ctc.p.Buyer(buyerInteract)
    await showBalance(acc)
}

ask.done()