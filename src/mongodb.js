//this file for manage normal user's database
const { Collection } = require("mongodb");
const mongoose = require("mongoose")


mongoose.connect("mongodb+srv://yadhukrishnan2030:Yadhu_123@cluster0.sdclovt.mongodb.net/AccountDetailsDatabase1",{useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log("mongodb connected");
})

.catch(()=>{
    console.log("failed to connect");
})

//schema of user's database
const LogInSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    }
})

const collection = new mongoose.model("collection1",LogInSchema)


module.exports = collection