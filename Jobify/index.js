const express = require('express')
const app = express()

const sqlite = require('sqlite')
const dbConnection = sqlite.open('banco.sqlite', { Promise })

app.set('view engine', 'ejs')

app.use(express.static('public'))

app.get('/', async(request, response) => {
    const db = await dbConnection
    const categorias = await db.all('select * from categorias;')
    response.render('home', {
        categorias
    })
})

app.get('/vaga', (request, response) => {
    response.render('vaga', {

    })
})

const init = async() =>{
    const db = await dbConnection
    await db.run('create table if not exists categorias (id INTERGER PRIMARY KEY, categoria TEXT)')
    const categoria = 'Time de Engenharia'
    await db.run(`insert into categorias(categoria) values('${categoria}') `)
        
}



    init()



app.listen(3000, (err) => {
    if(err){
        console.log('ERRO: Não foi possível iniciar o servidor.')
    }
    else{
        console.log('Servidor iniciado.')
    }
})
