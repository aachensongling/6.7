const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/atguigu', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.connection.once('open', err => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('数据库连接成功')
})

const teacherSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age:Number,
    sex:String,
    hobby:[String],
    createTime:{
        type:Date,
        default:Date.now
    }
});

const teacherModel = mongoose.model('student',teacherSchema);

new teacherModel({
    name:'美丽华',
    age:18,
    sex:'男',
    hobby:['美美哒'],
    createTime:Date.now()
}).save((err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log('老师初始化成功')
})






