/*then | catch
Вот здесь наша "обертка" ( промис ) и пригодится

Потому что у экземпляра Promise есть методы then и catch

Прикольно то, что эти методы возвращают... промис :wink:

Эти методы принимают колбэк-функции ( и ничего другого )

Этим методам мы и передадим реальные колбэк-функции, которые
будут использованы вместо формальных параметров resolve и reject
*/
new Promise (
    ( resolve, reject ) =>
        new Date().getSeconds() > 30 ? 
            resolve ( new Date().getSeconds() ) : 
            reject ( new Error (
                `Time is out: ${new Date().getSeconds()}` )
            )
)
    .then ( data => console.log ( data ) )
    .catch ( err => console.log ( err ) )
//Ожидание

