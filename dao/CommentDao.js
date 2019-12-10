var dbutil = require ("./dbutil");

//添加评论
function insertComment(blogId, parent, userName, email, comments, ctime, utime, success) {
    var insertSql = "insert into comments (`blog_id`, `parent`, `userName`, `email`, `comments`, `ctime`, `utime`) values (?, ?, ?, ?, ?, ?, ?)";
    var params = [blogId, parent, userName, email, comments, ctime, utime];

    var connection = dbutil.createConnection();
    connection.connect();
    connection.query(insertSql, params, function (error, result) {
        if (error == null) {
            success(result);
        } else {
            console.log(error);
        }
    });
    connection.end();
}


module.exports = {
    'insertComment':insertComment
}