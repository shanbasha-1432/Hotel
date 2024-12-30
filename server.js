const express = require("express");
const dotenv = require("dotenv");
const cors =require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");


const bookingRoutes=require('./routes/bookingroute')
const registerRoutes=require('./routes/registerroutes')
const loginRoutes=require('./routes/loginroutes')
const cartRoutes=require('./routes/cartRoute')
const itemRoutes=require('./routes/itemRoute')
const orderRoutes=require('./routes/orderRoute')


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors());
app.use(bodyParser.json());

mongoose  
        .connect(process.env.MONGO_URI)

        .then(()=>console.log("MongoDB connected successfully"))

        .catch((err) =>{
            console.error("MongoDB connection error:",err);
        })

        app.use('/booking',bookingRoutes);
        app.use('/register',registerRoutes);
        app.use('/login',loginRoutes);
        app.use('/cart',cartRoutes)
        app.use('/tiffin',itemRoutes)
        app.use('/order',orderRoutes)


        // app.use((err,req,res,next)=>{
        //     console.error('umhandled error:',err);
        //     res.status(500).json({message:'Internal server error'});
        // })

        app.listen(PORT,()=>{
            console.log(`surver running on port ${PORT}`)
        });

