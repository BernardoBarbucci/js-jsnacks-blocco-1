// Cliccando su un pulsante, viene avviato un cronometro. 
// Per fermare il cronometro, bisogna cliccare su un secondo pulsante

// prendo gli el dall'id
const startButton = document.getElementById('startButton');
const endButton = document.getElementById('endButton');

let timer; // Variabile per memorizzare il timer
let startTime; // Variabile per memorizzare il tempo di inizio

startButton.addEventListener('click', startTimer);
endButton.addEventListener('click', endTimer);

function startTimer() {
    if (!timer) {
        startTime = Date.now(); // Memorizza il tempo di inizio
        timer = setInterval(() => {
            const currentTime = Date.now();
            const elapsedTime = (currentTime - startTime) / 1000; // Calcola il tempo trascorso in secondi
            console.log('Elapsed time:', elapsedTime, 'seconds');
        }, 1000);
    }
}

function endTimer() {
    if (timer) {
        clearInterval(timer);
        timer = null;
        console.log('Timer stopped');
    }
}
