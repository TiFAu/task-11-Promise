/*Ожидание
Давайте помотрим, что произойдет, если мы создадим экземпляр Promise значительно раньше, 
чем повесим колбэки с помощью методов then и catch
*/
var test = new Promise (
    resolve => 
        resolve ( `Time: ${new Date().getSeconds()}/` )
)
//Выждав несколько секунд, выполним код:

console.log ( "Start" )
test
    .then ( data => console.log ( data, new Date().getSeconds() ) )

console.log ( "End" )
/*В консоли мы увидим что-то вроде:

Start
End
Time: 24/ 36
Т.е. в момент создания промиса test было 24 секунды, а когда мы добавили колбэки, было уже 36 секунд

Если мы повторим:

test
    .then ( data => console.log ( data, new Date().getSeconds() ) )
то мы увидим новое значение после слеша, и так можно "резвиться" до бесконечности :stuck_out_tongue_winking_eye:
*/
