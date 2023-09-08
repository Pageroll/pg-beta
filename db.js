const mongoose = require('mongoose');

const mongo = ()=>{
     mongoose.connect('mongodb+srv://robertjr:pg123456@cluster0.ljveogm.mongodb.net/db', { useNewUrlParser: true, useUnifiedTopology: true }).then(()=>{
    console.log("DB connected")
  }).catch((err)=>console.log(err));
}

module.exports=mongo;