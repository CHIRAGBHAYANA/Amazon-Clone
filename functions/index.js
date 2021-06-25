const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51J1ZMBSAcREKGzoP9Ee54937TBACrxp8fj0o0M1rkGOMYRvJxhiCr9YT89rH459DePCOmzzj7HCDs6KLDj9L7kbx00KUO7W770");

// API

// API config
const app = express();

// middlewares
app.use(cors({origin: true}));
app.use(express.json());

// API routes
app.get("/", (request, response) => response.status(200).send("hello world"));
app.post("/payments/create",  async (request,response) => {
    const total = request.query.total;
    
    console.log("Payment request recieved BOOM!! for this amount >>> ",total)

    const paymentIntent = await stripe.paymentIntents.create({
      amount: total, // subunit of the currency
      currency: "usd",
    }); 
    // Ok create
    response.status(200).send({
        clientSecret: paymentIntent.client_secret,

    })
})
// listen commands
exports.api = functions.https.onRequest(app);

// http://localhost:5001/clone-cabec/us-central1/api