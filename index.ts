#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

// Initialize user balance and pin code
let myBalance = 15000;
let myPin = 5656;

// printing a Wellcome Message
console.log(chalk.blue("\n \tWelcome To \`codewithabbas\` - ATM Machine\n"));

// Asking Question from Users through Inquirer

let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: chalk.yellow("Enter your pin code:")
        
    }
])
if (pinAnswer.pin === myPin) {
     console.log(chalk.green("\npin is correct, Login Successfully!/n"));
     // console.log(`Current Account Balance is ${myBalance}`)

     let operations = await inquirer.prompt([
         {
            name: "operation",
            type: "list",
            message: "please select operation",
            choices: ["withdraw", "fast cash", "check balance"]
          }     
  ]);
       if(operations.operation === "withdraw") {
        let amounts = await inquirer.prompt([{ 
            name: "amount",
            message: "enter your amount",
            type: "number",
}]);

     if(amounts.amount <= myBalance) {
           let balance = myBalance - amounts.amount;
           console.log(`the remaining balance is ${balance}`);
       }
       else {
           console.log(`you have insufficient balance`);
       }
           
       }
       else if (operations.operation === "fast cash") {
           let fastcashans = await inquirer.prompt([{
            name: "amount",
            type: "list",
            choices: [1000, 2000, 5000, 10000, 20000]
 }]);
       if (fastcashans.amount <= myBalance) {
           let balance1 = myBalance - fastcashans.amount;
           console.log(`Your remaining balance is: ${balance1}`);
       }
       else {
           console.log(chalk.red("you have insufficient balance"));
       }
      }
       else if (operations.operation === "check balance") {
          console.log(`Your Account Balance is: ${myBalance}`);
       }

     }
       else { 
           console.log(chalk.red("incorrect pin, Try Again"));
       }


   
        
           