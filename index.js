require('dotenv').config()
const express= require('express');
const productRouter=require('./routes/products');
const userRouter=require('./routes/users');
const mongoose = require('mongoose')
const cors=require('cors');
const path=require('path')

//server initialization
const app = express();



//middleware
app.use(cors());
app.use(express.json());
app.use(express.static(process.env.PUBLIC_DIR));
app.use('/products',productRouter.productRouter);
app.use('/users',userRouter.userRouter);
app.use('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'build/index.html'));
})



const mongoUri=process.env.MONGODB_URI;

mongoose.connect(mongoUri,{
    useNewUrlParser:true,
});

mongoose.connection.on('connected',()=>{
    console.log('connected to Mongodb...');
})

mongoose.connection.on('error',(err)=>{
    console.log('Error while connecting to mongodb',err);
})


//app starts
app.listen(process.env.PORT,()=>{
    console.log(`app is running on port ${process.env.PORT}`);
});