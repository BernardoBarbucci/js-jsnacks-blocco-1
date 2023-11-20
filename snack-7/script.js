// Dare la possibilità di inserire due parole. 
// Verificare tramite una funzione che le due parole abbiano la stessa lunghezza.
// Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.

function twoWords (wordOne, wordTwo) {
    let wordOnee = ('Inserisci la prima parola');
    let wordTwo = ('Inserisci la seconda parola');
    if (wordOne.length === wordTwo.length) {
        console.log("Le parole hanno la stessa lunghezza.");
    } else {
        console.log("Le parole hanno lunghezze diverse.");
    }
}



