const db = require('./db.controller');
const Product = require('../models/product.model');


const get_all = async (req,res)=>{
    db.get(Product,{})
    .then((result)=>{
        res.status(200).json({data:result});
    }).catch((err)=>{
        res.status(400).json({message:err});
    });
}

const get_by_id = async (req,res)=>{
    const id = req.params.id;
    db.get(Product,{_id:id})
    .then((result)=>{
        res.status(200).json({data:result});
    }).catch((err)=>{
        res.status(400).json({message:err});
    }); 
}

const add = async (req,res)=>{
    const requestIO = req.body;
    db.add(Product,requestIO)
    .then((result)=>{
        res.status(201).json({data:result});
    }).catch((err)=>{
        res.status(400).json({message:err});
    });
}

const update = async (req,res)=>{
    const id = req.params.id;
    const requestIO = req.body;
    db.update(Product,{_id:id},requestIO)
    .then((result)=>{
        res.status(200).json({data:result});
    }).catch((err)=>{
        res.status(400).json({message:err});
    });
}

const remove_all = async (req,res)=>{
    db.remove(Product,{})
    .then((result)=>{
        res.status(200).json({data:result});
    }).catch((err)=>{
        res.status(400).json({message:err});
    });
}

const remove_by_id = async (req,res)=>{
    const id = req.params.id; 
    db.remove(Product,{_id:id})
    .then((result)=>{
        res.status(200).json({data:result});
    }).catch((err)=>{
        res.status(400).json({message:err});
    });
}
module.exports = {
    get_all,
    get_by_id,
    add,
    update,
    remove_all,
    remove_by_id
}