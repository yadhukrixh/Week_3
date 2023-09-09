const { resolve } = require("path");
const db = require("./mongodb");
const { rejects } = require("assert");
const { response } = require("express");
const res = require("express/lib/response");
var objectId = require('mongodb').ObjectId



module.exports = {
    //function for delete users data by admin level
    deleteAccount:(accId)=>{
        return new Promise((resolve,reject)=>{
            db.deleteOne({_id:accId}).then(()=>{
                resolve(response)
            })
    })
    },

    //function for show details in edit page for admin
    getDetails:(accId)=>{
        return new Promise((resolve,reject)=>{
            db.findOne({_id:accId}).then((details)=>{
                resolve(details)
            })
        })
    },

    //function for update data of admin
    updateDetails:(accId,accDetails)=>{
        return new Promise((resolve,reject)=>{
            db.updateOne({_id:accId},{
                $set:{
                    name:accDetails.name,
                    email:accDetails.email
                }
            }).then((response)=>{
                resolve()
            })
        })
    }
}