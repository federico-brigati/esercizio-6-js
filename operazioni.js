let num1 = prompt("Inserisci il primo numero:");
let num2 = prompt("Inserisci il secondo numero:");

num1 = Number(num1);
num2 = Number(num2);

let somma           = num1 + num2;
let sottrazione     = num1 - num2;
let moltiplicazione = num1 * num2;
let divisione       = num1 / num2;
let potenza         = num1 ** num2;

console.log(
  "Con i numeri da te scelti, i risultati delle varie operazioni sono: " +
  "somma (" + somma + "), " +
  "sottrazione (" + sottrazione + "), " +
  "moltiplicazione (" + moltiplicazione + "), " +
  "divisione (" + divisione + "), " +
  "potenza (" + potenza + ")"
);
