const Database = require('./database/db')
const functionSaveProduct = require('./database/save-products')
const functionUpdateProduct = require('./database/update-product')
const functionDeleteProduct = require('./database/delete-product')

module.exports = {
    // Rotas principais

    async index(req, resp) {
        try {
            const db = await Database
            const products = await db.all(`SELECT * FROM products`)
    
            return resp.render('index.html', {products})
        } catch(e) {
            console.log(e)
            resp.send(`
            <h1> Erro no servidor </h1>
            <p>Tente novamente, se o erro persistir aguarde uns instantes.</p>
            `)
        }
    },

    administerProducts(req, resp) {
            return resp.render('administer-products.html')
    },

    // Procurar produtos 
    async searchProduct(req, resp) {
        const field = req.body
         try {
                const db = await Database
                const products = await db.all(` SELECT * FROM products WHERE name = "${field.nameProduct}"`)

                if (!products[0]) {
                 resp.redirect('/' + '?message=product&not&avaliable')
                 return
                }

            return resp.render('index.html', { products })
        }  catch(e) {
            console.log(e)
            resp.send(`
            <h1> Erro no servidor </h1>
            <p>Tente novamente, se o erro persistir aguarde uns instantes.</p>
            `)
        }
    },

    // Opções do painel de controle

    create(req, resp) {
            return resp.render('options/create.html')
    },

    update(req, resp) {
            return resp.render('options/update.html')
    },

    delete(req, resp) {
            return resp.render('options/delete.html')
    },

    // Salvar produto
    async saveProduct(req, resp) {
        const fields = req.body 
        try {
            const db = await Database

            await functionSaveProduct(db, {
                name: fields.name,
                image: fields.image,
                brand: fields.brand,
                price: `R$${fields.price}`,
               amount: fields.amount
            })
            
            resp.redirect('/administer-products')
        } catch(e) {
            resp.send(`<h1> Erro no servidor </h1>
                <p>Tente novamente, se o erro persistir aguarde uns instantes.</p>
            `)
            console.log(e)
        }
    },

    // Atualizando produto
     async updateProduct(req, resp) {
            const field = await req.body
        try {
            const db = await Database
            const chekingId = await db.all(`SELECT * FROM products WHERE id = "${field.id}"`)

            if (!chekingId[0]) {
                resp.redirect('/administer-products' + '?message=id&not&registered')
                return
            }

            functionUpdateProduct(db, field.id, {
                newName: field.newName,
                newImage:field.newImage,
                newBrand: field.newBrand,
                newPrice: field.newPrice,
                newAmount: field.newAmount,
            })

            resp.redirect('/administer-products')

        } catch(e) {
            console.log(e)
        }
    }, 
    
    // Deletando produto
    async deleteProduct(req, resp) {
        const field = req.body

        try {
            const db = await Database
            const chekingId = await db.all(`SELECT * FROM products WHERE id = "${field.id}"`)

            if (!chekingId[0]) {
                resp.redirect('/administer-products' + '?message=id&not&registered')
                return
            }

            await functionDeleteProduct(db, field.id)

            resp.redirect('/administer-products')

        } catch(e) {
            resp.send(`
            <h1> Erro no servidor </h1>
            <p>Tente novamente, se o erro persistir aguarde uns instantes.</p>
            `)
            console.log(e)
        }

    },
}