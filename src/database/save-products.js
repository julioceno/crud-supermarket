function saveProduct(db, product) {
    db.run(`INSERT INTO products (
        name,
        image,
        brand,
        price,
        amount
    ) VALUES (
        "${product.name}",
        "${product.image}",
        "${product.brand}",
        "${product.price}",
        "${product.amount}"
    );`)
}

module.exports = saveProduct