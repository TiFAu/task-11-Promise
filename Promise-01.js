new Promise (
    ( resolve, reject ) =>
        new Date().getSeconds() > 30 ? 
            resolve ( new Date().getSeconds() ) : 
            reject ( new Error (
                `Time is out: ${new Date().getSeconds()}` )
            )
)
    .then ( data => console.log ( data ) )
    .catch ( err => console.warn ( err ) )