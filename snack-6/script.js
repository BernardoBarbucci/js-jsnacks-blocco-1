// In un array sono contenuti i nomi degli invitati alla festa 
// del grande Gatsby (createlo voi con almeno 5 nomi),
// chiedi all'utente il suo nome e comunicagli se può partecipare o no alla festa.

const guestList = [
    'Gino',
    'Pino',
    'Marcello',
    'Checco',
    'Gallina',
    'Pollo',
    'Taddeus'
];

let userInput = prompt('Insert your name please:');

let isGuest = false;
// per dargli il nome quando entra
let guestName;

for (let i = 0; i < guestList.length; i++) {
    if (guestList[i] === userInput) {
        isGuest = true;
        // collego il nome     
        guestName = guestList[i];
        break;
    }
} 

if (isGuest) {
    console.log('Thank you for coming ' + guestName)
} else {
    console.log('Bruh you cant come in, go away LOSER')
}

