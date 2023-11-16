// Crea un array vuoto. Chiedi per 6 volte all'utente di inserire un numero, se è dispari inseriscilo nell'array.

// // arry vuoto
const oddNumbers = [];

// ciclo for per chiedere 6 volte il numero all'utente
for (i = 0; i <= 5; i++) {
    // richiesta all'utente
    let userNumber = prompt('Inserisci qua il tuo numero: ');
    
    // verifica se il numero è dispari, se si allora inseriscilo nell'array
        // Se number è 5, allora 5 % 2 è 1, e 1 !== 0 è true
        // Se number è 8, allora 8 % 2 è 0, e 0 !== 0 è false
    if (userNumber % 2 !==0) {
        oddNumbers.push(userNumber);
    } else {
        console.log('Non è dispari, ma prova ancora fino a 6 volte');
    }
    // else qua sopra completamente inutile???
}
// result in console dei numeri dispari inseriti nell'array
console.log('Numeri dispari che hai inserito: ', oddNumbers);