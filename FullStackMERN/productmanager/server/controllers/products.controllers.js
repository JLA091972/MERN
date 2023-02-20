// will hold the logic for each model/method. going to create, update , delete, read one/all

const Product = require('../models/products.model');

module.exports.allProducts = (req, res) => {
    Product.find()
        .then((allProducts) => {
            res.json({ results: allProducts })
        })
        .catch((err) => {
            res.json({ message: 'Error encountered:', error: err })
        });
}

module.exports.oneProduct = (req, res) => {
    Product.findOne({ _id: req.params.id })
        .then(oneSingleProduct => {
            res.json({ results: oneSingleProduct })
        })
        .catch((err) => {
            res.json({ message: 'Error encountered:', error: err })
        });
}

module.exports.addProduct = (req, res) => {
    Product.create(req.body)
        .then(newProduct => {
            res.json({ results: newProduct })
        })
        .catch((err) => {
            res.json({ message: 'Error encountered:', error: err })
        });
}

module.exports.updateProduct = (req, res) => {
    Product.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }  //validate information
    )
        .then(updatedUser => {
            res.json({ results: updatedUser })
        })
        .catch((err) => {
            res.json({ message: 'Error encountered:', error: err })
        });
}

module.exports.deleteProduct = (req, res) => {
    Product.deleteOne({ _id: req.params.id })  //deleteOne is a built in function with mongoose.
        .then(result => {
            res.json({ result: result })
        })
        .catch((err) => {
            res.json({ message: 'Error encountered:', error: err })
        });
}

// module.exports.randomProduct = (req, res) => {
//     Product.aggregate([{$sample:{size:1}}] )
//         .then(oneRandomProduct => {
//             res.json({ results: oneRandomProduct })
//         })
//         .catch((err) => {
//             res.json({ message: 'Error encountered:', error: err })
//         });
// }