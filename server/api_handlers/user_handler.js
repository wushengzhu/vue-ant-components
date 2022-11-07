const userModel = require('../schemas/user');
const idsModel = require('../schemas/ids');
const Util = require('../utils/util');
exports.saveUser = async (req, res) => {
    const userInfo = req.body;
    // if (!userInfo.Account || !userInfo.Password) {
    //     return res.send({ status: 400, message: '用户名或密码不能为空！' });
    // }
    if (Util.isUndefinedOrNullOrWhiteSpace(userInfo.Id)) {
        userModel.find({
            'Account': userInfo.Account
        }, (err, results) => {
            if (err) {
                return res.send({ status: 400, message: err.message });
            }
            // 用户名被占用
            if (results.length > 0) {
                return res.send({ status: 400, message: '用户名已经被占用' });
            }
        })
        // 实现Id的自增
        const ids = await idsModel.findOneAndUpdate({ "Name": "User" }, { $inc: { 'Id': 1 } })
        userInfo.Id = ids.Id
        userInfo.CreateTime = new Date()
        // 密码加密，只在注册时候使用
        // userInfo.Password = bcrypt.hashSync(userInfo.Password, 10);
        userModel.create(userInfo, function (err, results) {
            if (err) {
                console.log('添加用户失败!');
            }
            res.send({
                Code: 200,
                Message: '添加用户成功！',
                Data: results,
            });
        })
    } else {
        userModel.updateOne({ Id: userInfo.Id }, { $set: userInfo }, function (err, results) {
            if (err) {
                console.log('更新用户信息失败!');
            }
            res.send({
                Code: 200,
                Message: '更新用户信息成功！',
                Data: results,
            });
        })
    }
}

exports.deleteUser = async (req, res) => {
    const { userId } = req.query;
    userModel.deleteOne({ Id: userId }, (err, results) => {
        if (err) {
            console.log('删除用户失败！');
        }
        if (results.deletedCount === 1) {
            res.send({
                Code: 200,
                Message: '删除成功！',
                Data: true,
            })
        }
    })
}

exports.getUserById = async (req, res) => {
    const { userId } = req.query;
    userModel.findOne({ Id: userId }, (err, results) => {
        if (err) {
            console.log('查询失败！');
        } else {
            res.send({
                Code: 200,
                Message: '查询成功！',
                Data: results,
            })
        }
    })
}

exports.getList = async (req, res) => {
    const { curPage, pageSize, filters } = req.body;
    const skipData = (curPage - 1) * pageSize;
    let queryItem = {}
    if (!Util.isUndefinedOrNullOrWhiteSpace(filters)) {
        // 模糊搜索${filterValue}
        // 正则表达式只能为 {Account:  /Admin/i }或$regex:Admin
        queryItem = {
            Account: { $regex: eval(`/${filters}/i`) }
        }
    }
    const totalDataLength = await userModel.find(queryItem).count();
    userModel.find(queryItem, (err, results) => {
        if (err) {
            console.log('获取列表失败！');
        } else {
            res.send({
                Code: 200,
                Message: '获取列表成功！',
                Data: {
                    Data: results,
                    Total: totalDataLength
                },
            })
        }
    }).skip(skipData).limit(pageSize)
}