const ProductsController = require('../controllers/products.controllers.js')


module.exports = (app) => {

    //create
    //create call back function with 2 arg. req=request and res=response
    app.post("/api/products/new", ProductsController.addProduct);

    // //random
    // app.get("/api/products/random", ProductsController.randomProduct)

    //read all
    app.get("/api/products", ProductsController.allProducts);

    //update
    app.put("/api/products/:id/edit", ProductsController.updateProduct);

    //delete
    app.delete("/api/products/delete/:id", ProductsController.deleteProduct);

 //read one
    app.get("/api/products/:id", ProductsController.oneProduct);

}