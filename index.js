const express = require("express");
const mongoose = require('mongoose');
require('dotenv').config()

const app = express();

app.use(express.json());

const adminRoute = require('./routes/admin');
const shopRoute = require('./routes/shop');
const userRoute = require('./routes/user')

app.use('/admin',adminRoute);
app.use('/shop',shopRoute)
app.use('/user',userRoute)


mongoose.connect(process.env.CONNECTION_URL)
.then(()=>{

    app.listen(3000,()=>{
        console.log("Server Started")
    })
})
.catch((err) =>{
    console.log(err)
})


