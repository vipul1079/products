const express= require('express');
const fs= require('fs')
const mongoose= require('mongoose');
// const data = fs.readFileSync('./data.json','utf-8');
// const products=JSON.parse(data).products;
const model=require('../models/product')
const Product=model.Product;

exports.createProduct= async (req,res)=>{

    const {title,
    description,   
    price,
    discountPercentage,
    rating,
    brand,
    category,
    thumbnail,
    images}=req.body;

    try{
        const created = await Product.create({
            title,
            description,   
            price,
            discountPercentage,
            rating,
            brand,
            category,
            thumbnail,
            images
        })
        res.json({message:"Product created",created})
    }catch (error) {
        console.log(error);
        res.status(400).json(error);

    }

};

exports.getAllProducts=async (req,res)=>{

    try{
        const products=await Product.find();
        res.json(products);
    }catch(error){
        console.log(error);
        res.status(400).json(error);
    }

};

exports.getProduct=async (req,res)=>{
    
    try{
        const id=req.params.id;
        const product=await Product.findById(id);
        res.json(product);
    }catch(error){
        console.log(error);
        res.status(400).json(error);
    }

};

exports.updateProduct=async (req,res)=>{
    
    try{

        const id=req.params.id;
        const updatedProduct=await Product.findByIdAndUpdate({_id:id},{'title':req.body.title},{new:true});
        res.json(updatedProduct);

    }catch(error){
        console.log(error);
        res.status(400).json(error);
    }

};

exports.deleteProduct=async(req,res)=>{

    try{
        const id=req.params.id;
        const deletedProduct=await Product.findOneAndDelete({_id:id});
        res.json(deletedProduct);
    }catch(error){
        res.status(400).json(error);
    }
    
};