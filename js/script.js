// Un alert espone 5 numeri casuali.
// Dopo la chiusura (manuale, cioè facendo click su ok) dell'alert, parte un timer di 30 secondi.
// Dopo i 30 secondi l'utente deve inserire un prompt alla volta i numeri che ha visto precedentemente. Dopo che sono stati inseriti i 5 numeri, il software dice quanti e
// quali dei numeri da indovinare sono stati individuati.


// creo l'alert con 5 numeri casuali
var casuali = [];
var random;
while (casuali.length < 5) {
    random = Math.floor(Math.random()*100);
    if (!indovinato(casuali,random)) { // riporta valore FALSE
        casuali.push(random);
    }
}
alert(casuali);


// creo l'array nel quale inserire i numeri scelti dall'utente e uno dove mettere quelli indovinati
var utente = [];
var nu;
var uguali = [];

// creo il delay di 30 secondi
setTimeout(function(){
    while (utente.length != casuali.length) {
        nu = parseInt(prompt("inserisci uno dei numeri apparsi poco fa"));
        if (nu < 0 || nu > 100 || isNaN(nu)) {
            alert("Deve essere un numero da 0 a 100!")
        }  else if (indovinato(utente,nu)) {
            alert("Hai già inserito questo numero")
        }  else {
            utente.push(nu);
// controllo se i numeri scritti col prompt sono contenuti nell'array dei numeri random con una funzione
            if (indovinato(casuali,nu)) { //riporta TRUE
                uguali.push(nu);
            }
        }
    }
    document.getElementById('risultato').innerHTML = "Hai indovinato " + uguali.length + " numeri: " + uguali;

},1000)



// **********FUNZIONI**********

function indovinato(array,elemento){
    var i = 0;
    while (i < array.length) {
        if (elemento == array[i]) {
            return true;
        }
        i++;
    }
    return false;
}
