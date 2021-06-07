const express = require('express');

const app = express();

app.get('/',(req,res)=>{
console.log('/被请求了')
})

app.listen(3001,err =>{
    if(err){
        console.log(err);
        return;
    }
    console.log('服务器请求成功,请访问：'+ 'http//192.168.17.67:3001');
})


