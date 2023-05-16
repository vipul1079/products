const mongoose=require('mongoose')
const productSchema=mongoose.Schema({
    title:{type:String},
    description:{type:String},   
    price:{type:Number},
    discountPercentage: {type:Number},
    rating:{type:Number},
    brand: {type:String},
    category: {type:String},
    thumbnail:{type:String},
    images: [
        {type:String},
      ]
})

exports.Product=mongoose.model('Product',productSchema);