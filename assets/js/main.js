/* prova 
alert('prova');
*/

/* dichiaro le variabili firstName e lastName e richiedo il nome e cognome all'utente tramite la funzione prompt */
let firstName = prompt('Inserisci il tuo nome');
console.log(firstName);

let lastName = prompt('Inserisci il tuo cognome');
console.log(lastName);

/* dichiaro la variabile favColour e richiedo il colore preferito all'utente tramite la funzione prompt */
let favColour = prompt('Qual è il tuo colore preferito?');
console.log(favColour);

/* dichiaro la variabile password dove inserisco i dati appena forniti dall'utente */
let password = (firstName + lastName + favColour + '23' )
console.log(password);