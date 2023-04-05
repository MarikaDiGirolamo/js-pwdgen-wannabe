// Inserisci Nome

let nome = prompt ("inserisci nome");
// console.log (`il nome utente è ${nome}`);

// Inserisci Cognome
let cognome = prompt ("inserisci il tuo cognome");
// console.log (`il cognome utente è ${cognome}`);

// Inserisci colore
let colore = prompt ("inserisci colore");
// console.log (`il colore utente è ${colore}`);

// Genera Nuova Password
let password = `${nome} ${cognome} ${colore}`;

document.getElementById("passwordDaInserire").innerHTML = password + " " + 2023;