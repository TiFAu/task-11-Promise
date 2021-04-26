const altPicture = "https://www.christart.com/IMAGES-art9ab/clipart/2802/faith-key.png"
const altImage = "https://lh5.ggpht.com/bkM-5u58gbSZA14uujGitf8Bww871Og9MC1yK0tpuSboony6Jbw3Ueoufk-n1uUwL0wl=w300"

var picture = new Image ()
picture.onload = seccess
picture.onerror = reject

function seccess () {
  document.body.appendChild ( picture )
}

function reject () {
  picture.src = altPicture
  document.body.appendChild ( picture )
}

function testImage ( imgUrl ) {
    return new Promise( ( resolve, reject ) => {
            var img = new Image()
            img.onerror = event => reject ( event )
            img.onload = event => resolve ( event )
            img.src = imgUrl
        })
}

function inputChangedCallback ( event ) {
    var imgUrl = event.target.value
    testImage ( imgUrl ).then ( event => {
              document.body.appendChild ( event.target )
            }).catch ( event => {
              event.target.src = altImage
              document.body.appendChild ( event.target )
          })
}
