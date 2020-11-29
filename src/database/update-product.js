async function updateProduct(db, id, newProduct) {
    const product = await db.all(`SELECT * FROM products WHERE id ="${id}"`)


    await db.all(`UPDATE products Set name = "${ newProduct.newName || product[0].name}" WHERE id = "${id}" `)
    await db.all(`UPDATE products Set image = "${newProduct.newImage  || product[0].image }" WHERE id = "${id}" `)
    await db.all(`UPDATE products Set brand = "${ newProduct.newBrand || product[0].brand}" WHERE id = "${id}" `)
    await db.all(`UPDATE products Set price = "${ newProduct.newPrice || product[0].price}" WHERE id = "${id}" `)
    await db.all(`UPDATE products Set amount = "${ newProduct.newAmount || product[0].amount}" WHERE id = "${id}" `)
} 

module.exports = updateProduct