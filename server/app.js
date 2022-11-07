const express = require('express');
const cors = require('cors');
const logger = require('morgan')
const app = express();// 创建express 的服务器实例
const config = require('./utils/config');// 导入配置文件
const bodyParser = require('body-parser');
const apiRouter = require('./api');

app.use(logger('dev'));
// 系统默认大小为100kb
app.use(bodyParser.json({ limit: '50mb' }))
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));// 配置解析application/x-www-form-urlencoded
app.use(cors());// 将cors注册为全局中间件

// 方便处理失败的结果的中间件,手动封装res.cc()函数
app.use(function (req, res, next) {
    res.cc = (err, status = 1) => {
        return res.send({
            status,
            message: err instanceof Error ? err.message : err,
        })
    }
    next();
});
app.use(express.static("public"));// 配置静态资源目录，通过域名访问
app.use('/api/Train', apiRouter);

app.listen(config.port, function () {
    console.log('本地服务器http://127.0.0.1正在运行！');
})