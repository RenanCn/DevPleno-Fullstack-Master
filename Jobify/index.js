const express = require('express')
const app = express()

const sqlite = require('sqlite')
const dbConnection = sqlite.open('banco.sqlite', { Promise })

app.set('view engine', 'ejs')

app.use(express.static('public'))

app.get('/', async(request, response) => {
    const db = await dbConnection
    const categoriasDb = await db.all('select * from categorias;')
    const vagas = await db.all('select * from vagas;')
    const categorias = categoriasDb.map(cat =>{
        return{
            ...cat,
            vagas: vagas.filter( vaga => vaga.categoria === cat.id )
        }
    })
    console.log(categorias)
    response.render('home', {
        categorias
    })
})

app.get('/vaga/:id', async(request, response) => {    
    const db = await dbConnection
    const vaga = await db.get('select * from vagas where id = ' + request.params.id)
    response.render('vaga', {
        vaga
    })
})

app.get('/admin', (req, res) => {
    res.render('admin/home')
})

app.get('/admin/vagas', async(req, res) => {
    const db = await dbConnection
    const vagas =  await db.all('select * from vagas;')
    res.render('admin/vagas', { vagas })
})

app.get('/admin/vagas/delete/:id', async(req, res) => {
    const db = await dbConnection
    await db.run('delete from vagas where id = ' + req.params.id + '')
    res.redirect('/admin/vagas')
})

app.get('/admin/vagas/nova/', async(req, res) =>{
    res.render('admin/nova-vaga')
})

const init = async() => {
    const db = await dbConnection
    await db.run('create table if not exists categorias (id INTEGER PRIMARY KEY, categoria TEXT)')
    await db.run('create table if not exists vagas (id INTEGER PRIMARY KEY, categoria INTEGER, titulo TEXT, descricao TEXT)')
    //const categoria = 'Time de Marketing'
    //await db.run(`insert into categorias(categoria) values('${categoria}') `)
    const vaga = 'Mídias Sociais'
    const descricao = 'Vaga para mídias sociais.'
    //await db.run(`insert into vagas(categoria, titulo, descricao) values(2, '${vaga}', '${descricao}') `)
}

init()



app.listen(3000, (err) => {
    if(err){
        console.log('ERRO: Não foi possível iniciar o servidor.')
    }
    else{
        console.log('Servidor iniciado. ' + Date())
    }
})


