
function loadTextFile ( sourceURL ) {
    return new Promise( function ( resolve, reject ) {
        var transport = new XMLHttpRequest ()
        transport.onreadystatechange = function () {
              var mess = transport.responseText
              if ( transport.readyState === 4 ) {
                  if ( transport.status === 200 ) 
                      resolve ( mess )
                  else reject ( mess )
              }
        }
        transport.open ( "GET", sourceURL )
        transport.send ()
    })
}

function getTheData ( url ) {
    loadTextFile ( url )
        .then ( function ( response ) {
                document.querySelector ("#response").innerHTML = response
        })
        .catch ( function ( err ) { console.log ( err ) })
}


