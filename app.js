const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
});

app.get("/bmi", (req, res) => {
    res.sendFile(__dirname + "/bmiCalculator.html")
});

app.post("/", (req, res) => {
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1 + num2
    res.send("The result is: " + result);
});

app.post("/bmi", (req, res) => {
    var num1 = Number(req.body.weight);
    var num2 = Number(req.body.height);
    var result = num1 * num2;
    res.send("This is result: " + result);
});




app.listen(3000, process.env.IP, function () {
    console.log("server is running!");
});