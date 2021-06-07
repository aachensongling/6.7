const mongoose = require('mongoose');
const teacherSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    age:Number,
    sex:String,
    hobby:[String],
    createTime:{
        type:Date,
        default:Date.now
    }
});

const teacherModel = mongoose.model('teacher',teacherSchema);
module.exports = teacherModel