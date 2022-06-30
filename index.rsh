'reach 0.1';

const commonInteract = {
    reportCancellation: Fun([], Null),
    reportPayment: Fun([UInt], Null)
}
const sellerInteract = {
    ...commonInteract,
    price: UInt,
    wisdom: Bytes(128),
    reportReady: Fun([UInt], Null)
}
const buyerInteract = {
    ...commonInteract,
    confirmPurchase: Fun([UInt], Bool),
    reportWisdom: Fun([Bytes(128)], Null)
}
export const main = Reach.App(() => {
    const S = Participant('Seller', sellerInteract);
    const B = Participant('Buyer', buyerInteract);
    init();
    // The first one to publish deploys the contract
    S.only(() => {
        const price = declassify(interact.price);
    })
    S.publish(price);
    S.interact.reportReady(price)
    commit();
    // The second one to publish always attaches
    B.only(() => {
        const willBuy = declassify(interact.confirmPurchase(price))
    })
    B.publish(willBuy);
    if (!willBuy) {
        each([S, B], () => interact.reportCancellation())
        commit()
    } else {
        commit()
    }
    B.pay(price);
    each([S, B], () => interact.reportPayment(price))
    commit()

    S.only(() => {
        const wisdom = declassify(interact.wisdom)
    })
    S.publish(wisdom);
    transfer(price).to(S);
    commit();

    B.interact.reportWisdom(wisdom)

    // write your program here
    exit();
});