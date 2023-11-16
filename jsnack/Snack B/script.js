// Chiedi un numero di 7 cifre all'utente e calcola la somma di tutte le cifre che compongono il numero.

// array per inserire i numeri?
const userSum = [];

// richiesta del numero all'utente
let userNumber = prompt('Inserisci qua un numero a 7 cifre: ');

// controllo che sia un numero intero
let  numberCheck = parseInt(userNumber);

// verifica che sia un numero a 7 e solo 7 cifre (===)
if (!NaN(numberCheck) && userNumber.length === 7) {
    console.log('hai inserito un numero a 7 cifre, grande!');
} else {
    console.log('Il numero che hai inserito non è di 7 cifre, ritenta dai');
}