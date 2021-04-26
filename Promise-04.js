function randomResult () {
    return new Promise (
        ( resolve, reject ) => setTimeout (
            () => Math.random() > 0.4 ? resolve( {
                    name: "Google",
                    type: "service"
                } ) : 
                reject ( new Error ( "The promise was rejected" ) ),
            Math.round ( Math.random() * 5000 )
        )
    )
}

randomResult ()
    .then(
        data => console.log ( data ),
        err => console.warn ( err )
    )