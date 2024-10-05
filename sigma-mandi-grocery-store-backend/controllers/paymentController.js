const crypto = require('crypto');
const Payment = require("../models/orders.js");
const Razorpay = require('razorpay');
const instance = new Razorpay({
    key_id: process.env.RAZORPAY_API_KEY,
    key_secret: process.env.RAZORPAY_API_SECRET,
});
const checkout = async (req, res) => {
    //const razorpay = new instance.Razorpay.Orders();
    const options = {
        amount: Number(req.body.amount * 100),
        currency: "INR",
    };
    const order = await instance.orders.create(options);
    //const order = await razorpay.create(options);

    res.status(200).json({
        success: true,
        order,
    });
};

const paymentVerification = async (req, res) => {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
        req.body;
    const body = razorpay_order_id + "|" + razorpay_payment_id;

    const expectedSignature = crypto
        .createHmac("sha256", process.env.RAZORPAY_API_SECRET)
        .update(body.toString())
        .digest("hex");

    const isAuthentic = expectedSignature === razorpay_signature;
    if (isAuthentic) {
        // Database comes here

        await Payment.create({
            razorpay_order_id,
            razorpay_payment_id,
            razorpay_signature,
        });

        /*res.redirect(
            `http://localhost:3000/paymentsuccess`
            //`http://localhost:3000/paymentsuccess?reference=${razorpay_payment_id}`
        );*/
        res.status(200).json({
            success: true
        });

    } else {
        res.status(400).json({
            success: false,
        });
    }
};

module.exports = {
    instance,
    checkout,
    paymentVerification
}