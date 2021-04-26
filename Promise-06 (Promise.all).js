/* Супер-удобная штука

Этот метод принимает массив промисов, и возвращает массив ответов тогда, когда все промисы разрезолвятся
 */
var promises = [
    new Promise ( resolve => setTimeout ( () => resolve ( "Hello" ), 1000 ) ),
    new Promise ( resolve => setTimeout ( () => resolve ( "Bye" ), 3000 ) ),
    new Promise ( resolve => setTimeout ( () => resolve ( "How are you?" ), 2000 ) )
]

Promise.all ( promises ).then ( response => document.body.innerHTML += `<p>${response}</p>` )
// Плохо то, что если какой-то промис в массиве разреджектится, то слетят все остальные...

const executor = ( resolve, reject ) =>
    Math.random () > 0.5 ? 
        resolve ( "success :)" ) : 
        reject ( new Error ( "ups... :(" ) )

var promises = [
    new Promise ( executor ),
    new Promise ( executor ),
    new Promise ( executor )
]

Promise.all ( promises )
    .then (
        response => document.body.innerHTML += `<p>${response}</p>`,
        err => console.warn ( err )
    )