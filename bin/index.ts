#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from 'chalk';
import gradient from 'gradient-string';

console.log(chalk.black.bgYellow.bold("World's Greatest Calculator"));

async function runCalculator() {
  const inputData = await inquirer.prompt([
    {
      type: 'number',
      name: 'number1',
      message: chalk.grey('Enter the first number.'),
    },
    {
      type: 'number',
      name: 'number2',
      message: chalk.grey('Enter the second number.'),
    },
    {
      type: 'list',
      name: 'operator',
      message: chalk.grey('Select the operation you want to perform.'),
      choices: ['Add', 'Subtract', 'Divide', 'Multiply'],
    },
  ]);

  function Calculator() {
    let firstNum = inputData.number1;
    let secondNum = inputData.number2;
    let result: number;

    if (inputData.operator === 'Add') {
      result = firstNum + secondNum;
      console.log(`The answer of Addition is ${result}`);
    } else if (inputData.operator === 'Subtract') {
      result = firstNum - secondNum;
      console.log(`The answer of subtraction is ${result}`);
    } else if (inputData.operator === 'Divide') {
      result = firstNum / secondNum;
      console.log(`The answer of Division is ${result}`);
    } else if (inputData.operator === 'Multiply') {
      result = firstNum * secondNum;
      console.log(`The answer of Multiplication is ${result}`);
    }
  }

  Calculator();

  const recalculate = await inquirer.prompt([
    {
      type: 'confirm',
      name: 'another',
      message: 'Do you want to perform another calculation?',
    },
  ]);

  if (recalculate.another) {
    // Call the function recursively to run another calculation
    await runCalculator();
  } else {
    console.log(gradient.rainbow('Thank you for using World\'s greatest calculator. See you another time.'));
    process.exit()
    
    
  }
}

runCalculator();
  