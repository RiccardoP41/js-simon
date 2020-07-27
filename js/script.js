// Un alert espone 5 numeri casuali.
// Dopo la chiusura (manuale, cioè facendo click su ok) dell'alert, parte un timer di 30 secondi.
// Dopo i 30 secondi l'utente deve inserire un prompt alla volta i numeri che ha visto precedentemente. Dopo che sono stati inseriti i 5 numeri, il software dice quanti e
// quali dei numeri da indovinare sono stati individuati.


// creo l'alert con 5 numeri casuali
var casuali = [];
var random;
for (var i = 0; i < 5; i++) {
    random = Math.floor(Math.random()*100);
    casuali.push(random);
}
console.log(casuali + " casuali");

alert(casuali);


// creo l'array nel quale inserire i numeri scelti dall'utente
var utente = [];
var nu;
var uguali = [];

// creo il delay di 30 secondi
setTimeout(function(){
    while (utente.length != casuali.length) {
        nu = parseInt(prompt("inserisci uno dei numeri apparsi poco fa"));
        utente.push(nu);
// controllo se i numeri scritti col prompt sono contenuti nell'array dei numeri random con una funzione
        if (indovinato(casuali,nu)) {         //riporta TRUE
            uguali.push(nu);
        }
    }

    document.getElementById('risultato').innerHTML = "Hai indovinato " + uguali.length + " numeri: " + uguali;

},30000)



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
