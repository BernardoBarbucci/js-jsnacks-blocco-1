// Crea una funzione che accetta due numeri, se il primo e' divisibile per il secondo,
// allora ritorna vero, altrimenti ritorna falso. 
// Micro bonus: se sono uguali ritorna il numero.
    let numberOne = prompt('Inserisci il primo numero');
    let numberTwo = prompt('Inserisci il secondo numero');

    numberOne = parseFloat(numberOne);
    numberTwo = parseFloat(numberTwo);

function checkDivisibility() {

    if (numberOne !== 0 && numberOne % numberTwo === 0) {
        return true;
    } else {
        return false;
    }
}

checkDivisibility();
