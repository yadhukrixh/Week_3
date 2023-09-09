//creating variables and objects with various packages
const express = require("express")
const app = express()
const path = require("path")
const hbs = require("hbs")
const collection = require("./mongodb")
const admin = require("./mongodb1")
const auth = require("./auth")
const router = require("./admin")
const req = require("express/lib/request")

//for setting view folder
const templatePath = path.join(__dirname, '../tempelates')

//for using express,mongod,hbs for successfully connected
app.use(express.json())
app.set("view engine", "hbs")
app.set("views", templatePath)
app.use(express.urlencoded({ extended: false }))
app.use(express.static("public"))
app.use('/admin',router)


//for rendoring various pages
app.get("/", (req, res) => {
    res.render("login")
})

//for admin dashboard //for test purpose
app.get("/dashboard",async(req,res)=>{
    const dataObject = await collection.find({}).lean()
    res.render('dashboard',{dataObject})
})

//for signup
app.get("/signup", (req, res) => {
    res.render("signup")
})

//for admin login
app.get("/admin", (req, res) => {
    res.render("admin")
})

//admin edit //for test purpose
app.get("/edit",(req,res)=>{
    res.render("edit")
})

//home page after  logging //for test purpose
app.get("/home",(req,res)=>{
    res.render("home")
})


//signup function
app.post("/signup", async (req, res) => {
    const data = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }
    
})

//create account by admin
app.get("/create",(req,res)=>{
    res.render("create")
})
app.post("/create",async(req,res)=>{
    const data_add = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }
    collection.insertMany([data_add])
    const dataObject = await collection.find({}).lean()
    res.render('dashboard',{dataObject})
})

app.get("/login", (req, res) => {
    res.render('login');
})


//login function
app.post("/login", async (req, res) => {
    try {
        const check = await collection.findOne({ email: req.body.email })
        if (check.password === req.body.password) {
            res.render("home");
        }
        else {
            res.render("login")
        }
    }
    catch {
        res.render("login")
    }

})




app.post("/admin-signup",async (req,res)=>{
    const data = {
        admin_name:req.body.admin_name,
        admin_email:req.body.admin_email,
        admin_password:req.body.admin_password
    }
    admin.insertMany([data])
    res.send('insertion done')
    const signup = await admin.findOne({admin_name: req.body.admin_name})
    console.log(signup)
  
})


//admin login check
app.post("/admin", async (req, res) => {
    try {
        const check = await admin.findOne({ admin_name: req.body.admin_name })
        if (check.admin_password === req.body.admin_password) {
            res.render("dashboard",collection);
        }
        else {
            res.render("admin")
        }
    }
    catch {
        res.render("admin")
    }

    const dataObject = await collection.find({}).lean()
    res.render('dashboard',{dataObject})

})


//port connection at 3000
app.listen(3000, () => {
    console.log("port connected")
})

