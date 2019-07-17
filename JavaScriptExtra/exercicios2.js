// Exercicios - Conceitos JS: assincronismo

/*
1) Em linguagens síncronas é comum a função sleep(tempo) assim, pode-se por exemplo escrever algo 
no console, pausar o script por x tempo e escrever algo mais algo como:
> console.log('Olá!')
> sleep(2000)
> console.log('Depois de 2segs')
simule o sleep de maneira correta em Javascript (sem travar a thread principal) utilizando promises 
e uma função async/await 
*/

console.log(' • Exercícios - JS - Assincronismo • ')

const sleep = tempo => new Promise(resolve =>{
    setTimeout(resolve, tempo)
})

const execute = async() =>{
    console.log('Olá!')
    await sleep(2000)
    console.log("Olá de 2 segundos.")
}

execute()

/*
2) A função readdir disponível no módulo fs do Node, permite ler um diretório, e retornar seu 
conteúdo como um vetor. Crie uma versão em Promise da função. 
Dica: a assinatura da função é: fs.readdir(caminho, (err, files) => {}) 
*/

const fs = require('fs')
const readdir = caminho => new Promise((resolve,reject) => {
    fs.readdir(caminho, (err, arquivos) =>{
        if(err){
            reject(err)
        }
        else{
            resolve(arquivos)
        }
    })
})

readdir('./').then(arquivos => console.log(arquivos))

/*
3) A lista de arquivos retornado no exercício anterior, também retorna diretórios. Crie uma função que
retorne todos os sub-diretórios em um vetor (deve-se ignorar os arquivos retornados pelo readdir).
Algumas funções do fs e de Promises que ajudarão:

    • fs.stat(caminhoArquivoDiretorio, (err, stats) => {})
    • stats que é retornado no callback possui um isDirectory() e um isFile()
    • Promise.all(vetorDePromises): aguarda um vetor de promises ser executado, 
    e retorna uma promise que retorna para um vetor com o resultado.
    Ex: 
    • Promise.all([promise1, promise2]).then( results => {
    results[0] // resultado de promise1
    results[1] // resultado de promise2
    }) 
*/

const stat = caminho => new Promise((resolve, reject) => {
    fs.stat(caminho, (err, stats) =>{
        if(err){
            reject(err)
        }
        else{
            resolve(stats)
        }
    })
})

const isDirectory = async(caminho) => {
    const stats = await stat(caminho)
    return stats.isDirectory() ? caminho : false
}

const exec = async() => {
    const files = await readdir('./')
    const possibleDirectories = await Promise.all(files.map(f => isDirectory(f)))
    const directories = possibleDirectories.filter(item => item)
    console.log(directories)
}

exec()

/*
4) A lista de arquivos retornado no exercício 2, também retorna diretórios. Crie uma função que retorne 
todos os arquivos em um vetor (deve-se ignorar os diretório retornados pelo readdir).
Algumas funções do fs e de Promises que te ajudarão:
    • fs.stat(caminhoArquivoDiretorio, (err, stats) => {})
    • stats que é retornado no callback possui um isDirectory() e um isFile()
    Promise.all(vetorDePromises): aguarda um vetor de promises ser executado, e retorna uma promise 
    que retorna para um vetor com o resultado.
    Ex:
    • Promise.all([promise1, promise2]).then( results => {
    results[0] // resultado de promise1
    results[1] // resultado de promise2
    }) 
*/

const isFile = async(caminho) => {
    const stats = await stat(caminho)
    return stats.isFile() ? caminho : false
}

const exect = async() => {
    const files = await readdir('./')
    const possibleFiles = await Promise.all(files.map(f => isFile(f)))
    const onlyFiles = possibleFiles.filter(item => item)
    console.log(onlyFiles)
}

exect()