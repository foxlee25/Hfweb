const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

const keyPublishable = "pk_test_bvrERo1bcyGnEgfviWqegtCu";
const keySecret = "sk_test_yRB0PJnNXxMurVcKi15R1T4E";
const stripe = require("stripe")(keySecret);



//body parser middleware
app.set("view engine", "pug");
app.use(bodyParser.urlencoded({extended: false}));

//Set static path

app.use(express.static(path.join(__dirname, 'public')));

//integrate Checkcout

/*app.get("/checkout", (req, res) =>
    res.render("index.pug", {keyPublishable}));*/

app.post("/charge", (req, res) => {
    let amount = 16900;

    stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken
    })
        .then(customer =>
            stripe.charges.create({
                amount,
                description: "Sample Charge",
                currency: "usd",
                customer: customer.id
            }))
        .then(charge => res.render("charge.pug"));
});

app.listen(4567, function () {
    console.log('server started on 4567');
});

