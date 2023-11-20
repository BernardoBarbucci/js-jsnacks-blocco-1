// Crea una funzione che accetta due elementi del dom, uno e' il parent e
// l'altro e' un elemento che voglio sia aggiunto al parent come figlio.

function addElFirstToElTwo(elementFirst, elementTwo) {
    elementFirst.appendChild(elementTwo);
}

const parent = document.getElementById('parent');
const child = document.createElement('p');
child.textContent = 'elemento creato come figlio';

addElFirstToElTwo(parent, child);