// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

let userChoice;
do {
  userChoice = prompt("Scegli tra pari o dispari").toLowerCase();
} while (userChoice !== "pari" && userChoice !== "dispari");
console.log(`Hai scelto l'opzione ${userChoice}`);

let userNumber;
do {
  userNumber = parseInt(prompt("Scegli un numero da 1 a 5"));
} while (isNaN(userNumber) || userNumber < 1 || userNumber > 5);

console.log(`Hai scelto il numero ${userNumber}`);

function randomNmbr(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let rndPcNumb = randomNmbr(1, 5);
console.log(`Il numero del computer è ${rndPcNumb}`);

let sum;
sum = parseInt(rndPcNumb + userNumber);
console.log(`La somma dei vostri numeri è ${sum}`);

function isOddOrEven(number) {
  if (sum % 2 === 0) {
    return "Il numero è pari";
  } else {
    return "Il numero è dispari";
  }
}

let result = isOddOrEven(sum);
console.log(result);

if (result === userChoice) {
  console.log(`Hai vinto!`);
} else {
  console.log(`Hai perso!`);
}
