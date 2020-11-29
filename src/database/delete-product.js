async function deleteProduct(db, id) {
    await db.all(`DELETE FROM products WHERE id = "${id}"`)
}

module.exports = deleteProduct