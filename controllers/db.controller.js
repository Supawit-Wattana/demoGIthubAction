const mongoose = require('mongoose');

const get = async(model,query)=>{
    return new Promise((resolve,reject)=>{
        model.find(query,(err,result)=>{
            if(err)reject({code:409,response:err});
            resolve({code:200,response:result});
        });
    });
}

const add = async (model,data)=>{
    return new Promise((resolve,reject)=>{
        model.create(data,(err,result)=>{
            if(err)reject({code:409,response:err});
            resolve({code:200,response:result});
        });
    });
}

const update = async (model,query,data)=>{
    return new Promise((resolve,reject)=>{
        model.update(query,data,(err,result)=>{
            if(err)reject({code:409,response:err});
            resolve({code:200,response:result});
        });
    });
}

const remove = async (model,query)=>{
    return new Promise((resolve,reject)=>{
        model.remove(query,(err,result)=>{
            if(err)reject({code:409,response:err});
            resolve({code:200,response:result});
        });
    });
}

const load = async (model,data)=>{
    return new Promise((resolve,reject)=>{
        model.collection.insertMany(data,(err,result)=>{
            if(err)reject({code:409,response:err});
            resolve({code:200,response:result});
        });
    });
}

module.exports={
    get,
    add,
    update,
    remove,
    load
}