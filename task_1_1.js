import readline from 'readline';

const readLineInstance = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

readLineInstance.on('line', (input) => console.log(input.split('').reverse().join(''))); 
