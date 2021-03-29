import fs from 'fs';
import readline from 'readline';
import assert from 'assert/strict';

const inputFileStream = fs.createReadStream('./task_1_2_input.csv');
const outputFileStream = fs.createWriteStream('./task_1_2_output.txt'); 

let headerKey = [];
let isHeader = true;

const myInterface = readline.createInterface({
    input: inputFileStream    
});

myInterface.on('line', (inputLine) => {
    const inputLineArray = inputLine.split(',');
    
    if (isHeader) {
        headerKey = inputLineArray;
        isHeader = false;
        return
    } 

    const result = {};

    //remove Amount from result
    for (let i = 0; i < headerKey.length; i++) {
        const headerName = headerKey[i];
        if (headerName !== 'Amount') {
            result[headerName] = inputLineArray[i];
        }
    }

    const writeBuffer = Buffer.from(JSON.stringify(result));
    outputFileStream.write(writeBuffer);

});

inputFileStream.on('error', (e) =>{
    assert(false,e);
});

outputFileStream.on('error', (e) =>{
    assert(false,e);
});

myInterface.on('error', (e) =>{
    assert(false,e);
});
