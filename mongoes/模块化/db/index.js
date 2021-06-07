const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:3001/atguigu',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.once('open'err=>{
    if(err){
        console.log(err);
        return;
    }
    console.log('数据连接成功');
})