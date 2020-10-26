const { Model } = require('mongoose');
const db = require('./db.controller');
const types = require('mongoose').Types

const load_products = async (req,res)=>{
    const Product = require('../models/product.model');
    dump_data(Product).then((res)=>{
        console.log(res);
    }).catch((err)=>{
        console.log(err);
    })
    let requestIO = req.body
    requestIO = requestIO.map((obj)=>{
        if (obj._id.$oid){
            return {
                ...obj,
                _id:types.ObjectId(obj._id.$oid)
            }
        }else{
            return {
                ...obj,
                _id:types.ObjectId(obj._id)
            }
        }
        
    })
    db.load(Product,requestIO)
    .then((result)=>{
        res.status(201).json({data:result});
    }).catch((err)=>{
        res.status(400).json({message:err});
    });
}

const load_customers = async (req,res)=>{
    const Customer = require('../models/customer.model');
    let requestIO = req.body
    requestIO = requestIO.map((obj)=>{
        if (obj._id.$oid){
            return {
                ...obj,
                _id:types.ObjectId(obj._id.$oid)
            }
        }else{
            return {
                ...obj,
                _id:types.ObjectId(obj._id)
            }
        }
        
    })
    db.load(Customer,requestIO)
    .then((result)=>{
        res.status(201).json({data:result});
    }).catch((err)=>{
        res.status(400).json({message:err});
    });
}

const load_suppliers = async (req,res)=>{
    const Supplier = require('../models/supplier.model');
    let requestIO = req.body
    requestIO = requestIO.map((obj)=>{
        if (obj._id.$oid){
            return {
                ...obj,
                _id:types.ObjectId(obj._id.$oid)
            }
        }else{
            return {
                ...obj,
                _id:types.ObjectId(obj._id)
            }
        }
        
    })
    db.load(Supplier,requestIO)
    .then((result)=>{
        res.status(201).json({data:result});
    }).catch((err)=>{
        res.status(400).json({message:err});
    });
}

const load_transactions = async (req,res)=>{
    const Transaction = require('../models/transaction.model');
    let requestIO = req.body
    requestIO = requestIO.map((obj)=>{
        if (obj._id.$oid){
            return {
                ...obj,
                _id:types.ObjectId(obj._id.$oid)
            }
        }else{
            return {
                ...obj,
                _id:types.ObjectId(obj._id)
            }
        }
        
    })
    db.load(Transaction,requestIO)
    .then((result)=>{
        res.status(201).json({data:result});
    }).catch((err)=>{
        res.status(400).json({message:err});
    });
}
 
const dump_data = async (model)=>{
    let resp;
    db.get(model,{})
    .then((result)=>{
        db.remove(model,{})
        .then((res)=>{
            resp = res
        })
        .catch((err)=>{
            resp = err
        })
        return {data:result,response:resp};
    }).catch((err)=>{
        return {message:err};
    });
}

module.exports = {
    load_products,
    load_customers,
    load_suppliers,
    load_transactions,
    dump_data
}