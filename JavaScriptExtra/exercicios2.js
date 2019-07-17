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