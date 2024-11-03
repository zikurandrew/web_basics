// 1.
let varObject = { name: "Об'єкт" };
let varArray = [1, 2, 3];
let varString = "Привіт";
let varNumber = 42;
let varFunction = function() { return "Я типу цей.. Функція"; };

console.log("Object:", varObject, typeof varObject);
console.log("Array:", varArray, typeof varArray);
console.log("String:", varString, typeof varString);
console.log("Number:", varNumber, typeof varNumber);
console.log("Function:", varFunction, typeof varFunction);

// 2.
varString = 123;
varNumber = "456"

console.log("Літери як числа:", varString, typeof varString);
console.log("Числа як літери:", varNumber, typeof varNumber);

// 3.
console.log("Comparing '123' == 123:", "123" == 123);
console.log("Comparing '123' === 123:", "123" === 123);

// 4.
function encodeNumber(num) {
    return num.toString(16);
}

function decodeNumber(hex) {
    return parseInt(hex, 16);
}

let encoded = encodeNumber(12345);
console.log("Зашифроване число:", encoded);

let decoded = decodeNumber(encoded);
console.log("Дешифроване число:", decoded);