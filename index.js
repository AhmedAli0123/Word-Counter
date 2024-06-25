#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        type: "input",
        name: "Sentence",
        message: "Enter Your Sentence To Count The Word"
    }
]);
const Word = answer.Sentence.trim().split(" ");
console.log(`Your Sentence Is: ${Word}  And No Of Word Is: ${Word.length}`);
