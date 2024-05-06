#! /usr/bin/env node
console.log("by Hashir Ali");
import inquirer from "inquirer";
let myBalance = 10000;
let myPin = 1234;
let PinAnswer = await inquirer.prompt([
    {
        name: "q1",
        message: "Enter your pin number:",
        type: "number",
    },
]);
if (PinAnswer.q1 === myPin) {
    console.log(`Corect pin code !`);
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "Select one option",
            type: "list",
            choices: ["Withdraw", "check balance", "fast cash"],
        },
    ]);
    console.log(operationAns);
    if (operationAns.operation === `Withdraw`) {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount:",
                type: "number",
            },
        ]);
        myBalance -= amountAns.amount;
        console.log(`your remaining balance is :` + myBalance);
    }
    else
        operationAns.operation === `check balance`;
    {
        console.log(`your current balance is ` + myBalance);
    }
    if (operationAns.operation === `fast cash`) {
        let cashAns = await inquirer.prompt([
            {
                name: "cash",
                message: "please select one option",
                type: "list",
                choices: ["1000", "2000", "5000", "8000", "10000"],
            },
        ]);
        console.log(cashAns);
    }
}
else {
    console.log(`Incorrect pin number`);
}
