// Chiedi all'utente due numeri, uno piu' piccolo (due cifre) e uno piu' grande
// (almeno quattro cifre): moltiplica il primo numero per 2 finche' non arriva
//  ad essere maggiore del secondo numero.

// richiesta di due numeri, rispettivamente uno da due e l'altro da 4 cifre
let firstNumber = prompt('Inserisci un numero di due cifre: ');
let secondNumber = prompt('Inserisci un numero di 4 cifre: ');

// verifica che i numeri siano validi e soprattutto delle cifre richieste
if (!isNaN(parseInt(firstNumber)) && firstNumber.length === 2 &&
    !isNaN(parseInt(secondNumber)) && secondNumber.length === 4) {
    // creare un loop dove si moltiplica solo il primo numero per 2
    // prpblema risolto con ciclo for. su mdn cè scirtto esplicitamente di mettere il ; prima della prima variabile, infatti senza il programma non andava
    for (; firstNumber <= secondNumber; ) {
        firstNumber *= 2;
    }

        console.log('Per superare il secondo numero, il primo numero è stato moltiplicato per 2 fino ad arrivare a: ', firstNumber); 
    } else {
        console.log('I numeri che hai inserito non sono della lunghezza richiesta, il primo deve essere di 2 cifre ed il secondo di 4!')
    }


