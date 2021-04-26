/*const promise = new Promise ( 
    function ( resolve, reject ) {
        ...
    } 
)
здесь resolve и reject - колбэк-функции

Однако это только формальные параметры...

Но функция внутри промиса уже вызвана...

Почему же не генерируется исключение ?

Рассмотрим простой пример без "обертки" ( промиса )
*/
console.log ( "Start" )

const resolve = data => console.log ( data )
const reject = err => console.log ( err )

const executor = ( resolve, reject ) =>
    new Date().getSeconds() > 30 ? 
        resolve ( "success :)" ) : 
        reject ( new Error ( "ups... :(" ) )

executor ( resolve, reject )

console.log ( "Finish" )
/*
В консоли:

Start
success :)
Finish
Если бы мы не объявили функции resolve и reject до вызова функции executor,
 было бы сгенерировано исключение ReferenceError

Почему же после "заворачивания" в промис функция, которая запускается сразу 
и вызывает необъявленный колбэк resolve или reject, срабатывает без иключения ReferenceError ?

Потому, что вызов колбэков произойдет асинхронно, и никак не раньше того момента, 
когда мы передадим функции executor конкретные функции вместо формальных параметов resolve и reject

Вопрос - как их передать ?
*/