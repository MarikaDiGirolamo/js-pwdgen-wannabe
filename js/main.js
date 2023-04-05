
let nome = prompt ("inserisci nome");
// console.log (`il nome utente è ${nome}`);

let cognome = prompt ("inserisci il tuo cognome");
// console.log (`il cognome utente è ${cognome}`);

let colore = prompt ("inserisci colore");
// console.log (`il colore utente è ${colore}`);

let password = `${nome} ${cognome} ${colore}`;

document.getElementById("passwordDaInserire").innerHTML = password + 2023;