const express = require('express')
const app = express()
const methodOverride = require('method-override')

// Configurando template engine
const nunjucks = require('nunjucks')
nunjucks.configure('src/views',  {
    express: app,
    noCache: true
})

// Configurando rotas
const pages = require('./pages')

app

.use(methodOverride('_method'))
.use(express.urlencoded({ extended: true }))
.use(express.static('public'))

.get('/', pages.index)
.get('/administer-products', pages.administerProducts)

// options
.get('/create', pages.create)
.get('/update', pages.update)
.get('/delete', pages.delete)

// Salvando produto 
.post('/save-product', pages.saveProduct)

// Atualizando produto
.put('/update-product', pages.updateProduct)

// Deletando produto
.delete('/delete-product', pages.deleteProduct)


.listen(3000)