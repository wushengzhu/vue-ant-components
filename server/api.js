const express = require('express');
const router = express.Router();// 创建路由对象
const fileHandler = require('./api_handlers/file_handler');
const userHandler = require('./api_handlers/user_handler');

// router.post('/Image/Upload', fileHandler.uploadImage);// 上传图片
// router.post('/Attachment/Verify', fileHandler.verifyAttachment);// 验证附件分片
// router.post('/Attachment/UploadChunk', fileHandler.uploadChunk);// 上传分片
// router.post('/Attachment/MergeChunk', fileHandler.mergeChunk);// 合并分片
// router.post('/Attachment/Upload', fileHandler.mergeUpload);// 上传合并内容
// router.post('/Attachment/Delete', fileHandler.deleteFile);// 删除文件
// router.post('/Attachment/GetList', fileHandler.getFileList);// 获取文件列表
// router.post('/Attachment/Save', fileHandler.saveFile);// 保存文件信息

router.post('/User/Save', userHandler.saveUser);// 保存用户信息
router.get('/User/Delete', userHandler.deleteUser);// 删除用户信息
router.get('/User/GetById', userHandler.getUserById);// 获取用户信息
router.post('/User/GetList', userHandler.getList);// 获取列表信息

// 将路由对象共享出去
module.exports = router;