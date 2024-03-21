const client = require('../config').client

function transactionReference(length) {
    var result = ""
    var characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    var charactersLength = characters.length
    for (var i = 0; i < length; i++) {
        result += characters.charAt(
            Math.floor(Math.random() * charactersLength)
        )
    }
    return `Musicambique${result}`
}

function payment(req, res) {
    // console.log(req.body)
    const paymentData = {
        from: req.body.telephone, // input_CustomerMSISDN
        reference: transactionReference(8), // input_ThirdPartyReference
        transaction: "T12344C", // input_TransactionReference
        amount: req.body.amount, // input_Amount
    }

    // console.log(paymentData)

    client
        .receive(paymentData)
        .then((r) => {
            const response = {
                conversation: r.conversation,
                transaction: r.transaction,
                reference: r.reference,

            }
            res.json(response)
        })
        .catch((e) => {
            res.json(e)
        })
}

module.exports = {
    payment
}
