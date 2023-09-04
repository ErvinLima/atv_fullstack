const express = require('express')
const app = express()

const path = require('path')
const caminho = path.join(__dirname, 'templates')


app.use(express.urlencoded({
    extended: true
}))

app.use(express.json())

app.use(express.static('public'))

app.post('/anime/save', (req, res) => {
    const nome = req.body.nome
    const data = req.body.data

    console.log(`
        Usuário: ${nome}
        Idade: ${data}
    `)

    res.redirect('/')
})

app.get('/cadastro', (req, res) => {
    res.sendFile(`${caminho}/cadastrar.html`)
})

app.get('/', (req, res) => {
    res.sendFile(`${caminho}/index.html`)
})

app.listen(5000)