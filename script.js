// Ciclare per i primi 100 numeri e inserire in un array esclusivamente i numeri divisibili per 7 o per 8.
// ciclare i primi 100 numeri
// inseriamo i numeri nell'array
// inseriamo solo i numeri che vogliamo in un array

// array va fuori!!!
const newArray = [];

for (let i = 1; i <= 100; i++){
    if ( i % 7 || i % 8){
        newArray.push(i);
    }
}

console.log(newArray);