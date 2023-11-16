// L'utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.

let firstWord = prompt('Inserisci la prima parola');
let secondWord = prompt('Inserisci la seconda parola');

// If condition is true, return firstWord; otherwise, return secondWord 
console.log('Parola piu\' lunga:', (firstWord.length > secondWord.length) ? firstWord : secondWord);

