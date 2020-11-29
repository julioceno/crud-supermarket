const Database = require('./db')

Database.then(async db => {
    // await db.run(`
    //     INSERT INTO products(
    //         name,
    //         image,
    //         brand,
    //         price,
    //         amount
    //     ) VALUES (
    //         "Nescau",
    //         "smandnsfsafrew",
    //         "Nescau",
    //         "24.43",
    //         "32"
    //     );
    // `)
        
    // await db.all(`DELETE FROM products WHERE id = "${1}"`)
    // await db.all(`UPDATE products Set name = 'atualizando' WHERE id = '4'`)



    // const name = false
    // const name2 = 'eliege'

    // await db.all(`UPDATE products Set name = '${name || name2} ' WHERE id = "2"`)
    // await db.all(`UPDATE products Set image = 'nova imagem' WHERE id = "2"`)
    // await db.all(`UPDATE products Set brand = 'nova marca' WHERE id = "2"`)
    // await db.all(`UPDATE products Set price = 'novo preço' WHERE id = "2"`)
    // await db.all(`UPDATE products Set amount = 'nova quantidade' WHERE id = "2"`)


    const products = await db.all(`SELECT * FROM products`)
    console.log(products)
})