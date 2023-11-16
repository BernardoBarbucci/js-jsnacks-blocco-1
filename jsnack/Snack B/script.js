// Chiedi un numero di 7 cifre all'utente e calcola la somma di tutte le cifre che compongono il numero.

// richiesta del numero all'utente
let userNumber = prompt('Inserisci qua un numero a 7 cifre: ');

// controllo che sia un numero intero
let  numberCheck = parseInt(userNumber);

// verifica che sia un numero a 7 e solo 7 cifre (===)
if (!isNaN(numberCheck) && userNumber.length === 7) {
    // dentro if metto un cycle for per sommare i numeri che compongono il numero a 7 cifre,
    // sempre se è un numero a 7 cifre
        // step-1 = creo una variabile
        let sum = 0;
        // step-2 = faccio la somma con un cycle for e creo quindi un loop per sommare i singoli numeri -> uso .split
        for (let i = 0; i < userNumber.length; i++) {
            sum += parseInt(userNumber[i]);
        }
    
    console.log('hai inserito un numero a 7 cifre e la somma di tutti i numeri è: ', sum);
} else {
    console.log('Il numero che hai inserito non è di 7 cifre, ritenta dai');
}