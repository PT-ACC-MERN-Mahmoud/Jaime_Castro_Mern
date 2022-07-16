const Product = require ("../models/product.model.js");

module.exports = {

    createProduct: (request, respond) => {
        Product.create(request.body)
        .then((newProduct) => respond.json(newProduct))
        .catch((err) => console.log(err));
    }
};