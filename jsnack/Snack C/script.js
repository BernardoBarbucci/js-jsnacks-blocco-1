// Chiedi all'utente due numeri, uno piu' piccolo (due cifre) e uno piu' grande
// (almeno quattro cifre): moltiplica il primo numero per 2 finche' non arriva
//  ad essere maggiore del secondo numero.

// richiesta di due numeri, rispettivamente uno da due e l'altro da 4 cifre
let firstNumber = prompt('Inserisci un numero di due cifre: ');
let secondNumber = prompt('Inserisci un numero di 4 cifre: ');

// verifica che i numeri siano validi e soprattutto delle cifre richieste
if (!isNaN(parseInt(firstNumber)) && firstNumber.length === 2 &&
    !isNaN(parseInt(secondNumber)) && secondNumber.length === 4) {
        console.log('Hai inserito due numeri validi:', firstNumber, secondNumber); 
    }
// creare un loop dove si moltiplica solo il primo numero per 2
// creare un IF + condizione secondo la quale il primo numero si moltiplica per 2 FINCHE non arriva a superare il secondo numero da 4 cifre
