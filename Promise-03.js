/*Давайте умышленно используем обычные функции, у которых есть объект aguments и, соответственно, aguments.callee

Пусть все наши функции выводят в консоль свое имя

Так мы сможем увидеть, как они вызываются и отрабатывают
*/
console.log ( "Start" )

new Promise (
    function executor ( resolve, reject ) {
        console.log ( arguments.callee.name )
        Math.random() >= 0.5 ? 
            resolve ( arguments.callee.name ) : 
            reject ( new Error ( arguments.callee.name ) )
    }
)
    .then (
        function resolve ( data ) {
            console.log ( `${arguments.callee.name}: ${data}` )
        }
    )
    .catch (
        function reject ( err ) {
            console.log ( `${arguments.callee.name}: ${err}` )
        }
    )

console.log ( "End" )
/*Результат в случае резолва:
Start
executor
End
resolve: executor
Результат в случае реджекта:
Start
executor
End
reject: Error: executor
*/