// Обратите внимание, в какой последовательности будут срабатывать колбэки промисов

console.log ( "Диалог в чате" )

new Promise ( resolve => resolve ( "Привет, тебя как зовут?" ) )
    .then ( response => console.log ( response ) )
    .then ( () => console.log ( "А меня Миша. Ты где живешь?" ) )
    .then ( () => console.log ( "Во Львове. Ты работаешь или учишся?" ) )
    .then ( () => console.log ( "Я тоже. Ладно, до связи, удачи!" ) )

new Promise ( resolve => resolve ( "Привет, Маша, а тебя?" ) )
    .then ( response => console.log ( response ) )
    .then ( () => console.log ( "В Харькове. А ты где?" ) )
    .then ( () => console.log ( "Учусь, и работаю. А ты?" ) )
    .then ( () => console.log ( "Спасибо, и тебе )" ) )

console.log ( "___________________" )
// Из этого примера очевидно, что промисы позволяют организовать асинхронное выполнение кода