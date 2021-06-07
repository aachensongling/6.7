const mongoose = require('mongoose');

mongoose.connect('moongodb://127.0.0.1:27017/atguigu', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connection.once('open', err => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('数据库连接成功');
})

