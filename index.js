var express = require('express');
var globalConfig = require('./config');
var loader = require("./loader");
console.log(loader.get('/editEveryDay'));
var app = new express();
app.use(express.static("./page/"));


app.post('/editEveryDay',loader.get('/editEveryDay'));  //接受每日一句编写请求
app.get('/queryEveryDay',loader.get('/queryEveryDay'));



app.listen(globalConfig['port'], function() {
    console.log("服务器已启动")
});