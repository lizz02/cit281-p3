
const fs = require("fs");
const fastify = require("fastify")();
const {coinCount, coins} = require("./p3-module.js");


fastify.get("/", (req, res) => {
    fs.readFile(`${__dirname}/index.html`, (err, data) => {
        if (err){
            res.code = 500;
            res.header('Content-Type', 'text/html');
        }else{
            res.statusCode = 200;
            res.header('Content-Type', 'text/html');
            res.send(data);
        }
    })
});

fastify.get("/coin", (req, res) => {
    
    const {denom = 0, count = 0} = req.query;
    console.log(req.query)
    let coinValue = coinCount({denom, count});

        res.statusCode = 200;
        res.header('Content-Type', 'text/html');
        res.send(`<h2>Value of ${count} of ${denom} is ${coinValue}</h2><br /><a href="/">Home</a>`);
});

fastify.get("/coins", (req, res) => {
    const {option} = req.query
    console.log(option)
    switch(option) {
        case "1":
            console.log("hello")
            coinValue = coinCount({ denom: 5, count: 3 }, { denom: 10, count: 2 }); // option = 1
            break;
        case "2":
            coinValue = coinCount(...coins);    // option = 2
            break;
        case "3":
            coinValue = coinCount(coins);    // Extra credit: option = 3
        default:
            coinValue = 0;
    }

        res.statusCode = 200;
        res.header('Content-Type', 'text/html');
        res.send(`<h2>Option ${option} value is ${coinValue}</h2><br /><a href="/">Home</a>`);
});

const hostname = 'localhost';
const port = 8080;
fastify.listen(port, hostname, () => {
    console.log(`server running @ http://${hostname}:${port}/`)
});
