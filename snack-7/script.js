// Dare la possibilità di inserire due parole. 
// Verificare tramite una funzione che le due parole abbiano la stessa lunghezza.
// Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.


let wordOne = prompt('Inserisci la prima parola');
let wordTwo = prompt('Inserisci la seconda parola');


function twoWordsLength (wordOne, wordTwo) {

    if (wordOne.length === wordTwo.length) {
        console.log("Le parole hanno la stessa lunghezza.");
        console.log('Prima parola: ', wordOne);
        console.log('Seconda parola: ', wordTwo);
    } else {
        console.log("Le parole hanno lunghezze diverse.");

        if (wordOne.length > wordTwo.length) {
            console.log('Parola piu lunga:', wordOne);
        } else {
            console.log('Parola piu lunga: ', wordTwo);
        }
    }
}

twoWordsLength();



