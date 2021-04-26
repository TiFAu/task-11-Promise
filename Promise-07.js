// Для понимания полезности промисов в нашей асинхронной жизни рассмотрим простенький пример

console.log ( "hello" )

new Promise (
    resolve => resolve ( "Promise successfully rejected" )
).then ( response => console.log ( response ) )

console.log ( "wait for promise" )
/* Обратите внимание, что функция, переданная конструктору Promise, отнюдь не асинхронная

Однако, завернув ее в промис, мы убрали ее из основного потока

Она будет выполнена тогда, когда Call Stack освободится, т.е. все текущие операции в основном потоке завершатся

Это позволяет избежать блокирующих операций

Если какой-то фрагмент кода содежит слишком "тяжеловесные" вычисления или операции, которые могут длиться достаточно долго, чтобы заблокировать основной поток - заверните такой код в промис, и он "уйдет" в Event Loop

Почти аналогичного результата можно достичь с помощью таймера с нулевой задержкой:
 */
console.log ( "start" )

setTimeout ( () => console.log ( "Time is over" ), 0 )

console.log ( "Application finished" )
/* Однако результат с таймером все-таки отличается от результата с промисом

В первом случае ( с промисом ) приложение не завершает работу, пока промис не вернет результат

В случае с таймером приложение завершит работу к тому моменту, когда колбэк таймера сработает
 */
console.log ( "Start" )

setTimeout ( () => console.log ( "Timeout is over" ), 0 )

let promise = new Promise (
    resolve => resolve ( "Promise successfully resolved" )
)

promise.then ( response => console.log ( response ) )

console.log ( "Finish" )
// Запустите этот код в консоли и обратие внимание, что таймер сработает после промиса, хотя промис в коде следует за таймером

Start
Finish
Promise successfully rejected
undefined   // выполнение кода основного потока завершено
Timeout is over