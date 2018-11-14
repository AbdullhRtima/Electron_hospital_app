const remote = require ('electron').remote ;
const main  = remote.require('./main.js');

var login  = document.getElementById("login");

login.addEventListener('click',() => {
    var window = remote.getCurrentWindow()
    main.openWindow('p1')
    window.close()
    console.log('successed ')
  
    
},false)
document.body.appendChild(login ,username ,password )
