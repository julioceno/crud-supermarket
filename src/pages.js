module.exports = {
    index(req, resp) {
        return resp.render('index.html')
    },

    administerProducts(req, resp) {
        return resp.render('administer-products.html')
    },

    create(req, resp) {
        return resp.render('options/create.html')
    },

    update(req, resp) {
        return resp.render('options/update.html')
    },

    delete(req, resp) {
        return resp.render('options/delete.html')
    },


}