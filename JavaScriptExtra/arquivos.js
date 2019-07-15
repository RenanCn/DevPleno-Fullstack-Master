const fs = require('fs')


// callback hell
fs.readFile('temporizadores.js', (err, data) => {
    fs.writeFile('temporizadores-copia.js', data, (err) =>{
        console.log('arquivo copiado')
    })
})

// promises + asyn/await