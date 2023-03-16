// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma.

const userWord = prompt("Inserisci la parola");
console.log(userWord);

function isPalindroma(userChoice) {
  let reverseWord = userChoice.split("").reverse().join("");
  return reverseWord === userChoice;
}

if (isPalindroma(userWord)) {
  console.log("Parola corretta!");
} else {
  console.log("Parola errata!");
}
