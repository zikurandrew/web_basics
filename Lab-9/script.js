let startTime = new Date();
let currentTime = new Date();
let secondsPassed = 0;

do {

    currentTime = new Date();


    secondsPassed = Math.floor((currentTime - startTime) / 1000);

    
} while (secondsPassed < 10); 

console.log("Таймер завершено!");
