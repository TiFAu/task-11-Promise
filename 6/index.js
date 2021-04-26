var promise = new Promise ( function ( resolve, reject ) {
    var container = document.body.appendChild ( document.createElement ( 'div' ) )
    let createRadio = ( text, name, val, callback ) => {
        var btn = container.appendChild ( document.createElement ( 'input' ) )
        btn.type = 'radio'
        btn.name = name
        btn.value = val
        btn.onclick = function ( event ) { 
          var answer = this.value
          this.parentNode.parentNode.removeChild ( this.parentNode )
          callback ()
        }
        container.appendChild ( document.createElement ( 'span' ) ).innerHTML = text + '<br>'
    }
    let btn1 = createRadio ( 'yes', 'ask', true, resolve )
    let btn2 = createRadio ( 'no', 'ask', false, reject )
})

promise.then ( 
    () => {
        document.body.appendChild ( document.createElement ( 'img' ) ).src = "https://www.google.com.ua/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
    }, 
    () => {
      document.body.appendChild ( document.createElement ( 'h3' ) ).innerHTML = "Sorry..."
    }
)