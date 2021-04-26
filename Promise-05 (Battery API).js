navigator.getBattery().then ( result => {
    for ( var x in result ) 
        console.log ( `${x}: ${result[x]}` )
})