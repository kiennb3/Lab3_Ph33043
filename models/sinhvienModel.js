const mongoose=require('mongoose');
const router = require('../routes/sinhvienRoute');
const sinhvienSchema= new mongoose.Schema({
    id:{
        type:String,
        require:true
    },
    name:{
        type:String,
        require:true
    }
});

const sinhvien=mongoose.model('sinhvien',sinhvienSchema);
module.exports=sinhvien;