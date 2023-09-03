const fs = require("fs");
const path = require("path");
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let logFileStr,
    randomNumber;

console.log("Введите путь к лог-файлу");

rl.on("line", (data) => {

    if (data == 'exit') {
        if (logFileStr) logFileStr.end();
        rl.close();
        return;
    } 

    if (!logFileStr) {
        logFileStr = fs.createWriteStream(data, (err) => {
            if (err) throw Error(err);
            console.log("Выберите 1 или 2, для выхода введите exit;");
        });

        if (!logFileStr) return;
    } 

    let inputNumber = Number(data);

    if (randomNumber) {
        if (inputNumber != 1 && inputNumber != 2) {
            console.log("Вы выбрали не верное число, введите 1 или 2");
            return;
        }

        let content = randomNumber === inputNumber ? "Вы угадали число" : "Вы не угадали число";

        console.log(content);
        logFileStr.write(content + '\n', 'utf8')
        randomNumber = undefined;
    }
    
    if (!randomNumber) {
        console.log("Выберите 1 или 2");
        randomNumber = Math.floor(Math.random() * 2 + 1);
    }
});

