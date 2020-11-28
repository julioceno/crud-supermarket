const express = require('express')
const app = express()

// Configurando template engine
const nunjucks = require('nunjucks')
nunjucks.configure('src/views',  {
    express: app,
    noCache: true
})

// Configurando rotas
const pages = require('./pages')

app
.use(express.urlencoded({ extended: true }))
.use(express.static('public'))

.get('/', pages.index)
.get('/administer-products', pages.administerProducts)

// options
.get('/create', pages.create)
.get('/update', pages.update)
.get('/delete', pages.delete)


.listen(3000, () => {
    console.log('Servidor ligado')
})