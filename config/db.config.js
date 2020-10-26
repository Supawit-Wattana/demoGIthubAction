const mongoose = require('mongoose');

const connect = async ()=>{
    const uri ="mongodb+srv://root:bk9x5aIeMJRValN5@c0.kmshg.mongodb.net/test"
    mongoose.connect(uri,{
    useNewUrlParser: true,
    useUnifiedTopology: true
    }).catch((err)=>{
    console.log(err);
    return false
    })
}

module.exports={
    connect
}

