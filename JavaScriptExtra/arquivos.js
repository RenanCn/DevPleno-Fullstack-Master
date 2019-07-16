const {
    readFile, 
    writeFile
} = require('./fs-promise')


// async/await

const copyfile = async() =>{
    try{
        console.log('Olá async/await')
        const data = await readFile('temporizadores.js')
                     await writeFile('copia-async-await.js', data)
        //console.log(String(data))
        console.log('Arquivo lido e escrito.')
    }catch(err){
        console.log('' + err)
    }
}

copyfile().then(() => console.log('fim do async/await'))