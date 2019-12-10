var commentDao = require("../dao/CommentDao");
var timeUtil = require("../util/timeUtil");
var respUtil = require("../util/respUtil");
var url = require("url");
var path = new Map();
var captcha = require("svg-captcha");   //引入验证码的工具



//评论
function addComment(request, response) {
    var params = url.parse(request.url, true).query;
    commentDao.insertComment(parseInt(params.bid), parseInt(params.parent), params.userName, params.email, params.content, timeUtil.getNow(), timeUtil.getNow(), function (result) {
        response.writeHead(200);
        response.write(respUtil.writeResult("success", "查询成功", result));
        response.end();
    })
}
path.set('/addComment',addComment)



//验证码
function queryRandomCode (request, response) {
    var img = captcha.create({fontSize:50,width:100,height:34})
    response.writeHead(200);
    response.write(respUtil.writeResult("success", "评论成功", img));
    response.end();
}
path.set('/queryRandomCode',queryRandomCode)




module.exports.path = path;