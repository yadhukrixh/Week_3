const express = require("express")
const router = express.Router()
const account_data = require("./mongodb")
const a = require("./function")
const async = require("hbs/lib/async")
const req = require("express/lib/request")

//delete users account by admin level
router.get('/delete/:id',(req,res)=>{
    let accId = req.params.id
    a.deleteAccount(accId).then((response)=>{
        res.redirect("/dashboard")
    })
    
})

//edit details of users account by admin level
router.get('/edit/:id', async(req,res)=>{
    let details = await a.getDetails(req.params.id)
    console.log(details)
    res.render('edit',{details})
})
router.get('/create/'),(req,res)=>{
    res.render("create")
}

router.post('/edit/:id',(req,res)=>{
    a.updateDetails(req.params.id,req.body).then(()=>{
        res.render('/dashboard')
    })
})

//exporting routs
module.exports = router; 