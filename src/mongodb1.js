//This file for manage admin account's details
const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://yadhukrishnan2030:Yadhu_123@cluster0.sdclovt.mongodb.net/AccountDetailsDatabase1",{useNewUrlParser: true, useUnifiedTopology: true})

.then(()=>{
    console.log("mongodb connected");
})

.catch(()=>{
    console.log("failed to connect");
})

//schema of admin's database
const AdminSchema = new mongoose.Schema({
    admin_name:{
        type:String,
        require:true
    },
    admin_email:{
        type:String,
        require:true
    }, 
    admin_password:{
        type:String,
        require:true
    }
}) 

const admin = new mongoose.model("Accounts",AdminSchema)
module.exports = admin