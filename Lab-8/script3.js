let x = 5;
let y = -x;  // унарний мінус
let z = !true;  // логічне заперечення
let a = x++;  // інкремент
let b = y--;  // декремент
let c = typeof x;  // оператор типу

// Бінарні оператори
let sum = 10 + 5;  // додавання
let mult = 20 * 4;  // множення
let div = 15 / 3;  // ділення
let comparison = x >= y;  // порівняння
let and = true && false;  // логічне І
let or = true || false;  // логічне АБО

// Тернарний оператор
let age = 20;
let status = age >= 18 ? "дорослий" : "неповнолітній";



const line1 = "Нехай завжди буде сонце";
const line2 = "Нехай завжди буде небо";
const line3 = "Нехай завжди буде мама";
const line4 = "Нехай завжди буду я";

const poem = line1.concat(
    "\n", line2,
    "\n", line3,
    "\n", line4
);

console.log(poem);