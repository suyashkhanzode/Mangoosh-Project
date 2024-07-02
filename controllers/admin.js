const Product = require('../models/product')
const mongoose = require('mongoose')

exports.addProduct = async (req, res, next) => {
  const { title, price, description, imageUrl } = req.body;
  const p = new Product({
    title: title,
    price: price,
    description: description,
    imageUrl: imageUrl,
  });
  const result = await p.save();
  res.status(201).json({ message: result });
};

exports.getAllProduct = async (req,res,next) =>{
    const allProducts = await Product.find()
    res.status(200).json({result :allProducts })
}

exports.updateProduct = async (req,res,next) =>{
    try {
        const {title,price,description,imageUrl} = req.body;
        const productId = req.params.productId;
        const result = await Product.findByIdAndUpdate(
            productId,
            {
                title: title,
                price: price,
                description: description,
                imageUrl: imageUrl
            },
            { new: true } 
        );
        res.status(200).json({message : result});
    } catch (error) {
        res.status(400).json({message : error});
    }
 
}

exports.deleteProduct = async (req,res,next) =>{
    try {
        const productId = req.params.productId;
        const id = new mongoose.Types.ObjectId(productId)
        const result = await Product.findByIdAndDelete(id);
        res.status(200).json({message : result});
    } catch (error) {
        res.status(400).json({message : error});
    }
}
