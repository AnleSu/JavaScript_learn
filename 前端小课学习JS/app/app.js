// 导入 expres 框架
const express = require('express');

// 初始化 express
const app = express();

const morgan = require('morgan');
app.use(morgan('short'));

//设置跨域请求
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
  
});
// get 方法，匹配 path 为 /api/fe/list
app.get('/api/fe/list', function (req, res) {
    console.log('request path:' + req.path);
    var result = {
    code: 200,
    data: {
            name: "前端小课",
            des: "第三阶段内容：网络编程内容 HTTP，TCP，WebServer"
          }
    }
    // 响应以 json 的方式返回给客户端
    res.json(result);
});
// 监听 8888 端口
app.listen(8888);

console.log('app start: http://127.0.0.1:8888');