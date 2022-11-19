import PromptSync from 'prompt-sync';
const prompt = PromptSync();


const name = prompt("What is your name ? ");
console.log(name);


const num = prompt("Enter a number : ");
console.log(Number(num) + 4);