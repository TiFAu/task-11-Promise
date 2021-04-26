/* По запросу публики :wink:

Синхронизируем во времени выполнение трех функций ( последовательно, одна после другой )
 */
const promise = message => new Promise (
    resolve => setTimeout (
        () => resolve ( message ),
        Math.random () * 3000
    )
).then ( resp => console.log ( resp ) )

const first = () => promise ( "First" )
const second = () => promise ( "Second" )
const third = () => promise ( "Third" )

first().then (
    () => second().then (
        () => third()
    )
)